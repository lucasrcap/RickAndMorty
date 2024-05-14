import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];
  seasons: any[] = [];
  term: string = '';
  loading: boolean = false;
  searchUpdate = new Subject<string>();
  notFound: boolean = false;

  constructor(private episodeService: EpisodeService, private router: Router) {
    this.searchUpdate
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.episodes = [];
        this.seasons = [];
        this.loading = true;
        this.notFound = false;
        this.loadEpisodesRecursively(1);
      });
  }

  ngOnInit(): void {
    this.episodes = [];
    this.seasons = [];
    this.loading = true;
    this.notFound = false;
    this.loadEpisodesRecursively(1);
  }

  loadEpisodesRecursively(page: number) {
    this.episodeService.getEpisodes(this.term, page).subscribe(
      (data: any) => {
        this.episodes = this.episodes.concat(data.results);
        if (data.info.next) {
          this.loadEpisodesRecursively(page + 1);
        } else {
          this.seasons = this.episodeService.mapToSeasons(this.episodes);
          this.loading = false;
        }
      },
      (error) => {
        this.loading = false;
        this.notFound = true;
      }
    );
  }

  goToEpisode(episode: any) {
    this.router.navigate(['episodes', episode.id]);
  }
}
