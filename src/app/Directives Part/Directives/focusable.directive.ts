import { Directive, HostBinding } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[Focusable]',
})
export class Focusable {
  @HostBinding('attr.tabindex') tabIndex = 0;
  @HostBinding('class.focus-outline') focusClass = true;
}
