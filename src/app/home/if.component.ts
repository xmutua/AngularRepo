import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-if',
  template: `
    @if (isServerRunning){ <span>Yes, the server is running </span> }
    @else { <p>No, the server is not running </p>}
    `,
  standalone: true,
})
export class IfComponent {  
  isServerRunning = true;
}