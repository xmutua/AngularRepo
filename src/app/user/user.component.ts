import {Component, Input, input} from '@angular/core';
import { CommentsComponent } from './comments.component';
import { ImgComponent } from './img.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <hr>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }} </p>
    <hr>
    <form 
      [formGroup]="profileForm"
      (ngSubmit)="handleSubmit()">
      <label>Name
        <input type="text" formControlName="name" />
      </label>
      <label>Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }} </p>
    <p>Email: {{ profileForm.value.email }} </p>
    <hr>
    <h1>How I feel about Angular</h1>
    <article>
    <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
    <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
    <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
    <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
    <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
    <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted.</p>
    </article>

    @defer (on viewport) {
      <comments name = "Emmanuel" />
    } @placeholder {
      <p>Future comments </p>
    } @loading (minimum 5s) {
      <p>Loading comments...</p>
    }
    <hr>
    <app_img></app_img>
  `,
  standalone: true,
  imports: [CommentsComponent, ImgComponent, FormsModule, ReactiveFormsModule],
})
export class UserComponent {
  username = 'Samuel'; 
  favoriteFramework='';

  showFramework(){
    alert(this.favoriteFramework);
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + '|' + this.profileForm.value.email
    );
  }
}