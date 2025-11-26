import { Directive, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[Highlight]',
})
export class Highlight {
  @Input('Highlight') HighlightColor = 'yellow';
  @Input() defaultColor = 'transparent';

  @HostBinding('style.backgroundColor') bg = this.defaultColor;
 @HostBinding('style.cursor') cursor = 'pointer';
@HostBinding('style.color') textColor = '#fff';

@HostListener('mouseenter')
onMouseEnter() {
  this.bg = this.HighlightColor;
  this.textColor = '#fff';
}

@HostListener('mouseleave')
onMouseLeave() {
  this.bg = this.defaultColor;
  this.textColor = '#333';
}

}
