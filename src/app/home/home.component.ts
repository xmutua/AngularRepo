import { Component, inject } from "@angular/core";
import { IfComponent } from "./if.component";
import { OsComponent } from "./os.component";
import { EventComponent } from "./event.component";
import { ChildComponent } from "./child.component";
import { CarService } from "./car.service";
import { ApiService } from "./api.service";
import { NgFor } from "@angular/common";

@Component({
    selector: 'app-home',
    template: `
        <h1>Home Page </h1>
        Hello {{ city }}
        <section>
            <app-if />
            <app-os />
        </section>
        <div [contentEditable]="isEditable"></div>
        <hr>
        <section>
            <app-event />
        </section>
        <hr>        
        <app-child (addItemEvent)="addItem($event)" />
        <p> 🐢 All the way down {{ items.length }} </p>
        <hr>
        <p> {{ carService.getCars() }} </p>
        <div class="container">     
            <table class="table table-striped">  
                <thead>  
                    <tr>  
                    <th>ID</th>  
                    <th>Email</th>  
                    <th>Date of Birth</th>  
                    <th>Age</th>  
                    </tr>  
                </thead>  
                <tbody>  
                <tr *ngFor="let dt of data">  
                    <td>{{ dt.id }}</td>  
                    <td>{{ dt.email }}</td>  
                    <td>{{ dt.dob }}</td>  
                    <td>{{ dt.age }}</td>
                </tr>  
                </tbody>  
            </table>  
        </div>
    `,
    standalone: true,
    imports: [IfComponent, OsComponent, EventComponent, ChildComponent, NgFor],
})
export class HomeComponent {
    city = 'San Francisco';
    isEditable = true;
    data: any;

    items  = new Array();
    addItem(item: string) {
        this.items.push(item);
    }

    carService = inject(CarService);

    constructor(private apiService: ApiService) {        
       this.fetchData();
    }

    fetchData(): void {
        this.apiService.getData().subscribe(response => {
            /* Handle fetched data                       
            this.data = JSON.parse(JSON.stringify(response));*/
            this.data = response;
            console.log(this.data);
        });
        
    }

    postData(): void {
        const payload = {  };
        this.apiService.postData(payload).subscribe(response => {
            // Handle post response
        });
    }
}