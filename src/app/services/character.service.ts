import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  baseUrl: string = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getCharacters(term: string = '', page: number = 1) {
    const url = `${this.baseUrl}/character?page=${page}${
      term.trim() != '' ? `&name=${term}` : ''
    }`;

    return this.http.get(url);
  }

  getCharacter(id: string | null) {
    const url = `${this.baseUrl}/character/${id}`;

    return this.http.get(url);
  }
}
