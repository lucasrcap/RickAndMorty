import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  @Input() location: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToLocation() {
    this.router.navigateByUrl(`/locations/${this.location.id}`);
  }
}
