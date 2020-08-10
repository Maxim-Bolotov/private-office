import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactsService } from 'src/app/shared/services/contacts.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  contact: Contact;
  submitted = false;

  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.contactsService.getById(params['id']);
      })
    ).subscribe((contact: Contact) => {
      this.contact = contact;
      this.form = new FormGroup({
        name: new FormControl(contact.name, Validators.required),
        network: new FormControl(contact.network, Validators.required),
        info: new FormControl(contact.info, Validators.required)
      });
    });
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.uSub = this.contactsService.update({
      ...this.contact,
      info: this.form.value.info,
      name: this.form.value.name,
      network: this.form.value.network
    }).subscribe(() => {
      this.submitted = false;
      this.alert.warning('Контакт отредактирован');
    });
  }
}
