import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app_img',
    template: `
        <p>Image loading... </p>
        <li>
            Static Image:
            <img ngSrc="logo.ico" alt="Angular-logo" width="32" height="32" />
        </li>
        <li>
            Dynamic Image:
            <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
        </li>
    `,
    standalone: true,
    imports: [NgOptimizedImage]
})
export class ImgComponent {
    logoUrl = 'logo.svg';
    logoAlt = 'Angular logo';
}