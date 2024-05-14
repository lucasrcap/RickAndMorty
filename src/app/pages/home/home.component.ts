import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: 'Characters',
      imageUrl:
        'https://preview.redd.it/pmwrvhpak9741.jpg?auto=webp&s=344f6921bb144e1312f225a3a569238bccab5056',
      linkTo: '/characters',
    },
    {
      title: 'Locations',
      imageUrl:
        'https://i0.wp.com/overmental.com/wp-content/uploads/2015/10/rick-and-morty-butts.jpg?ssl=1',
      linkTo: '/locations',
    },
    {
      title: 'Episodes',
      imageUrl:
        'https://www.indiewire.com/wp-content/uploads/2017/07/rick-and-morty.png',
      linkTo: '/episodes',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
