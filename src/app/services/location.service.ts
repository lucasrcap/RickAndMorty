import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  baseUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getLocations(term: string = '', page: number = 1) {
    const url = `${this.baseUrl}/location?page=${page}${
      term.trim() != '' ? `&name=${term}` : ''
    }`;

    return this.http.get(url);
  }

  getLocation(id: string | null) {
    const url = `${this.baseUrl}/location/${id}`;

    return this.http.get(url);
  }
}
