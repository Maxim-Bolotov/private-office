import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/shared/interfaces';
import { ContactsService } from 'src/app/shared/services/contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  contacts: Contact[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchContact = '';

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.pSub = this.contactsService.getAll().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  remove(id: string) {
    this.dSub = this.contactsService.remove(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    });
  }
}
