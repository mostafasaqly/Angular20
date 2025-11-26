
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Focusable } from '../Directives/focusable.directive';
import { PrimaryButton } from '../Directives/primary-button.directive';


@Component({
  standalone: true,
  selector: 'composed-button',
  template: ` {{ label }} `,
  host: {
    type: 'button',
    '(click)': 'handleClick()',
  },
  hostDirectives: [
    Focusable,
    {
      directive: PrimaryButton,
      inputs: ['mode'],
    },
  ],
  styles: [
    `
      :host.btn {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: none;
        font-weight: 600;
        margin-right: 0.5rem;
      }

      :host.btn-primary {
        background: #0509ffff;
        color: #fff;
      }

      :host.btn-danger {
        background: #f44336;
        color: #fff;
      }

      :host.focus-outline:focus-visible {
        outline: 2px solid #28a1f0;
        outline-offset: 2px;
      }
    `,
  ],
})
export class ComposedButton {
  @Input() label = 'Button';
  @Input() mode: 'primary' | 'danger' = 'primary';
   @Output() buttonClick = new EventEmitter<{
    label: string;
    mode: string;
    date: string;
    time: string;
  }>();

  handleClick() {
      const now = new Date();

    this.buttonClick.emit({
      label: this.label,
      mode: this.mode,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    });
  }
}
