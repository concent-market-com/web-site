import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toParagraph',
  standalone: true
})
export class ToParagraphPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.split(/\n/).map((line) => `<p>${line}</p>`).join('');
  }
}
