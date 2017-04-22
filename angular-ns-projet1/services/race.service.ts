import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RacesService {
  constructor(private http: Http) {
  }
  list() {
        console.log("on passe par le http");
   return this.http.get('/api/races');
  }
}