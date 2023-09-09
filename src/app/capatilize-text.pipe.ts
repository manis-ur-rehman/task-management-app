import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capatilizeText'
})
export class CapatilizeTextPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
