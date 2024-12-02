import {Component} from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
    `,
  standalone: true,
})
export class EventComponent {  
  message = '';
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}