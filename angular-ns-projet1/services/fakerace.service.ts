import { Injectable } from '@angular/core';

@Injectable()
export class FakeRaceService {
  list() {
    console.log("on passe par le fake");
   return [{ name: 'London' }];
  }
}