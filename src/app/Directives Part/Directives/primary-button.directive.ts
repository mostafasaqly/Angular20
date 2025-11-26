import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[PrimaryButton]',
})
export class PrimaryButton {
  @Input('mode') mode: 'primary' | 'danger' = 'primary';

  @HostBinding('class.btn') baseClass = true;
  @HostBinding('class.btn-primary') get isPrimary() {
    return this.mode === 'primary';
  }
  @HostBinding('class.btn-danger') get isDanger() {
    return this.mode === 'danger';
  }
}
