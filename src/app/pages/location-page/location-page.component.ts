import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss'],
})
export class LocationPageComponent implements OnInit {
  @Input() location: any;
  id: string | null = this.route.snapshot.paramMap.get('id');
  loading: boolean = false;
  characters: any = [];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.locationService.getLocation(this.id).subscribe((data: any) => {
      this.location = data;
      let characters = data.residents.map((resident: string) => {
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
