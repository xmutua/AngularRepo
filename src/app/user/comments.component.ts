import {Component, Input, input, Output, EventEmitter} from '@angular/core';
import { UserComponent } from './user.component';

@Component({
  selector: 'comments',
  template: `    
    <p>The user's name is: {{ name }} </p>
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
  standalone: true,
})
export class CommentsComponent {  
  @Input() name = '';  
}