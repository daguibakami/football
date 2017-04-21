import { Injectable } from '@angular/core';

@Injectable()
export class FakeRaceService {
  list() {
   return [{ name: 'London' }];
  }
}