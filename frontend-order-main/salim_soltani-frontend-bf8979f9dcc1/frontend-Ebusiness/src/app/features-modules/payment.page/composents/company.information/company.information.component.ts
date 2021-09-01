import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-company-information',
  templateUrl: './company.information.component.html',
  styleUrls: ['../../payment.page.component.css']
})
export class CompanyInformationComponent implements OnInit {
  testvalue = "hi aim testing "

  myform: FormGroup;
  constructor() {
    this.myform = new FormGroup({
      phoneNumer: new FormControl('', [
        Validators.required,
      ]),address: new FormControl('', [
        Validators.required,
      ]),articleNumber: new FormControl('', [
        Validators.required,
      ]),fiscaleName: new FormControl('', [
        Validators.required,
      ]),
      companyName: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  modify() {
    (document.getElementById('nomEntere') as any).removeAttribute('disabled');
    (document.getElementById('fiscal') as any).removeAttribute('disabled');
    (document.getElementById('article') as any).removeAttribute('disabled');
    (document.getElementById('adr') as any).removeAttribute('disabled');
    (document.getElementById('tel') as any).removeAttribute('disabled');

  }
  ngOnInit(): void {

  }

}
