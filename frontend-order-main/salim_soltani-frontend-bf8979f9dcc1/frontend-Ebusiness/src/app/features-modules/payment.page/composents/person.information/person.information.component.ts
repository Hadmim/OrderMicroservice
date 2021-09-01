import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-information',
  templateUrl:'./person.information.component.html',
  styleUrls: ['../../payment.page.component.css']
})
export class PersonInformationComponent implements OnInit {

  personForm: FormGroup;
  constructor() {
    this.personForm = new FormGroup({
      personPhoneNumber: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      firstName: new FormControl('', [
        Validators.required,
      ]),
      lastName: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  modify(){
    (document.getElementById('nom')as any).removeAttribute('disabled');
    (document.getElementById('prenom')as any).removeAttribute('disabled');
    (document.getElementById('email')as any).removeAttribute('disabled');
    (document.getElementById('tel')as any).removeAttribute('disabled');

  }
  ngOnInit(): void {
  }

}
