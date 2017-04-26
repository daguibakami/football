import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';
@Pipe({ name: 'fromNow' })
export class FromNowPipe implements PipeTransform {
  transform(value, args) {
   return moment(value).fromNow();
  }
}