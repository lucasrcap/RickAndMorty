import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() title?: string;
  @Input() imageUrl?: string;
  @Input() dark: boolean = false;
  @Input() linkTo?: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigateByUrl(this.linkTo ? this.linkTo : '/');
  }
}
