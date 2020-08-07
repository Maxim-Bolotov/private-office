import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact, FbCreateResponse } from '../interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.fbDbUrl}/contacts.json`, contact)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...contact,
          id: response.name,
          date: new Date(contact.date)
        };
      }));
  }
}
