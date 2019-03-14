import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ProccesOsdeResponsePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'proccesOsdeResponse',
})
export class ProccesOsdeResponsePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
