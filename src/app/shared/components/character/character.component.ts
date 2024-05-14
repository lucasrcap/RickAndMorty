import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  @Input() character: any;
  firstEpisode?: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.character.episode[0]).subscribe((data: any) => {
      this.firstEpisode = data;
    });
  }
}
