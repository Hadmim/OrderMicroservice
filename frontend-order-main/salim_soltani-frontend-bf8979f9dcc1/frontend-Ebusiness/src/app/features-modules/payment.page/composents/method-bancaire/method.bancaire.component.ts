import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-method-bancaire',
  templateUrl: './method.bancaire.component.html',
  styleUrls: ['../../payment.page.component.css']
})
export class MethodBancaireComponent implements OnInit {
  yesrs: string[]=[]
  monthes=[  'Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre']
  bancaireform: FormGroup;

  constructor() {
    this.bancaireform = new FormGroup({
      bancaireCardNumber: new FormControl('', [
        Validators.required,
      ]),
      bancaireMonth: new FormControl('', [
        Validators.required,
      ]),
      bancaireYesr: new FormControl('', [
        Validators.required,
      ]),
      bancaireICVC: new FormControl('', [
        Validators.required,
      ]),
      bancaireFullName: new FormControl('', [
        Validators.required,
      ]),
    });

    for(let i=1;i<50;i++){
      if(i.toString().length==1)
      this.yesrs.push("202"+i);
      else
      this.yesrs.push("20"+i);
    }
  }
  transaction:boolean =false;
  payer(){
  this.transaction=true;

  }
  OnlyNumberAllow(event:any):boolean{
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48 || charCode>57)){
      console.log('charCode restricted is'+charCode);
      return false;
    }

    return true;
  }
  ngOnInit(): void {
  }

}
