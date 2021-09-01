import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-method-dahabia',
  templateUrl: './method.dahabia.component.html',
  styleUrls: ['../../payment.page.component.css']
})
export class MethodDahabiaomponent implements OnInit {

  yesrs: string[]=[]
  monthes=[  'Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre']
  transaction:boolean= false;
  dahabiaform: FormGroup;
  payer(){
  this.transaction=false;

  }
  OnlyNumberAllow(event:any):boolean{
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48 || charCode>57)){
      console.log('charCode restricted is'+charCode);
      return false;
    }

    return true;
  }
  constructor() {
    this.dahabiaform = new FormGroup({
      dahabiaCardNumber: new FormControl('', [
        Validators.required,
      ]),
      dahabiaMonth: new FormControl('', [
        Validators.required,
      ]),
      dahabiaYesr: new FormControl('', [
        Validators.required,
      ]),
      dahabiaICVC: new FormControl('', [
        Validators.required,
      ]),
      dahabiaFullName: new FormControl('', [
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

  ngOnInit(): void {
  }

}
