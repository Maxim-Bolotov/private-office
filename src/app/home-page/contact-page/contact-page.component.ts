import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Contact } from 'src/app/shared/interfaces';
import { ContactsService } from 'src/app/shared/services/contacts.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contact$: Observable<Contact>;
  contacts: Contact[] = [];
  dSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contact$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.contactsService.getById(params['id']);
      }));
  }
}
