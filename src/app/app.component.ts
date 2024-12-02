import {Component, Input, input, NgModule} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
      <router-outlet />
    </nav>
`,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  standalone: true,
  imports: [RouterLink, RouterOutlet],
})
export class AppComponent {}