import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private http: HttpClient) { }

  getWork() {
    return this.http.get('http://localhost:3000/works');
  }

}
