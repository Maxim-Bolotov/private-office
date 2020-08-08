import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared/interfaces';
import { ContactsService } from 'src/app/shared/services/contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts$ = this.contactsService.getAll();
  }

}
