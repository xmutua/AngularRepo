import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-os',
  template: `
    @for (os of operatingSystems; track os.id) {
      <p>{{ os.name }}</p>   
    }`,
  standalone: true,
})
export class OsComponent {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'mac', name: 'MacOs'}, {id: 'ubu', name: 'Ubuntu'}];
}
