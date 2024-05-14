import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations: any[] = [];
  term: string = '';
  searchUpdate = new Subject<string>();
  currentPage: number = 1;
  pages: number = 1;
  next: string | null = '';
  prev: string | null = '';
  loading: boolean = false;
  notFound: boolean = false;

  constructor(private locationService: LocationService) {
    this.searchUpdate
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.currentPage = 1;
        this.loadLocations();
      });
  }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    this.loading = true;
    this.notFound = false;
    this.locationService.getLocations(this.term, this.currentPage).subscribe(
      (data: any) => {
        this.loading = false;
        this.locations = data.results;
        this.pages = data.info.pages;
        this.prev = data.info.prev;
        this.next = data.info.next;
      },
      (error) => {
        this.locations = [];
        this.loading = false;
        this.notFound = true;
      }
    );
  }

  nextPage() {
    this.currentPage++;
    this.loadLocations();
  }

  prevPage() {
    this.currentPage--;
    this.loadLocations();
  }
}
