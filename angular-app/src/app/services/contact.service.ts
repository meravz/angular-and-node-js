import { Injectable } from '@angular/core';
import { contactModel } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpCient: HttpClient) {

  }

  postServer(d: contactModel): Observable<object> {
    return this.httpCient.post<object>('http://localhost:8888/contact', d)
  }
}
