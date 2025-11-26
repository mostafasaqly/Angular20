import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclaim'
})
export class ExclaimPipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    times: number = 1
  ): string {
    if (!value) return '';

    const count = Math.min(15, Math.max(1, times));
    return value.toUpperCase() + '!'.repeat(count);
  }
}
