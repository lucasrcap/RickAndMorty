import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent implements OnInit {
  id: string | null = this.route.snapshot.paramMap.get('id');
  character: any;
  episodes: any = [];
  seasons: any = [];
  loading: boolean = false;

  constructor(
    private characterService: CharacterService,
    private episodeService: EpisodeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.characterService.getCharacter(this.id).subscribe((data: any) => {
      this.character = data;
      let episodes = data.episode.map((episode: string) => {
        return episode.split('/').pop();
      });
      this.episodeService.getEpisode(episodes).subscribe((data: any) => {
        if (episodes.length == 1) {
          this.episodes.push(data);
        } else {
          this.episodes = data.map((episode: any) => {
            return episode;
          });
        }
        this.seasons = this.episodeService.mapToSeasons(this.episodes);
        this.loading = false;
      });
    });
  }

  goToEpisode(episode: any) {}
}
