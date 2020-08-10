import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/shared/interfaces';
import { ContactsService } from 'src/app/shared/services/contacts.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private contactsService: ContactsService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      network: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const contact: Contact = {
      name: this.form.value.name,
      network: this.form.value.network,
      info: this.form.value.info,
      date: new Date()
    };

    this.contactsService.create(contact).subscribe(() => {
      this.form.reset();
      this.alert.success('Добавлен новый контакт');
    });
  }

}
