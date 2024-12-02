import { Injectable, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ApiService {
    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/api/v1/student`);
        //return this.http.get(this.apiUrl);
    }

    postData(payload: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, payload);
    }
}