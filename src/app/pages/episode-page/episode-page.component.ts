import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.scss'],
})
export class EpisodePageComponent implements OnInit {
  @Input() episode: any;
  id: string | null = this.route.snapshot.paramMap.get('id');
  loading: boolean = false;
  characters: any = [];

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.episodeService.getEpisode(this.id).subscribe((data: any) => {
      this.episode = data;
      let characters = data.characters.map((resident: string) => {
        return resident.split('/').pop();
      });
      this.characterService.getCharacter(characters).subscribe((data: any) => {
        if (characters.length == 1) {
          this.characters.push(data);
        } else {
          this.characters = data.map((character: any) => {
            return character;
          });
        }
        this.loading = false;
      });
    });
  }
}
