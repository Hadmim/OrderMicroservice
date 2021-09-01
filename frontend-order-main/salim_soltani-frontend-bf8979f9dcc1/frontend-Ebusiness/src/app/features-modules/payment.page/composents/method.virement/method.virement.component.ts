import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-method-virement',
  templateUrl: './method.virement.component.html',
  styleUrls: ['../../payment.page.component.css']
})
export class MethodVirementComponent implements OnInit {
  OnlyNumberAllow(event:any):boolean{
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48 || charCode>57)){
      console.log('charCode restricted is'+charCode);
      return false;
    }

    return true;
  }
  virmentForm: FormGroup;

  constructor() {
    
    this.virmentForm = new FormGroup({
      virmentAdresse: new FormControl('', [
        Validators.required,
      ]),
      virmentAccountNumer: new FormControl('', [
        Validators.required,
      ]),
      virmentFile: new FormControl('', [
        Validators.required,
      ]),
    });
   }

  ngOnInit(): void {
  }
  onchange(file: any){

    console.log(file)
  }
}
