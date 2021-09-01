import { Component, OnInit } from '@angular/core';
import { ServiceService } from '@shared/services/service.service';


import {Router} from '@angular/router';

import {livrasionInformation} from '@shared/services/dummydata';
import { LivrasionInformation } from '@shared/entities/livrasioninformation';

@Component({
  selector: 'app-e-product-pay',
  templateUrl: './e-product-pay.component.html',
  styleUrls: ['./e-product-pay.component.css']
})

export class EProductPayComponent implements OnInit {

  constructor( private service:ServiceService, private route:Router) { }

  ngOnInit(): void {
  }

  Data :any  = livrasionInformation;     
  res: any;

  send(): void {
    console.log("this my data", this.Data);

   // if(this.Data!=null)

    this.res = this.service.sendData(this.Data).subscribe(

       (data: LivrasionInformation )=>{ 

         console.log("verify my data", data);
        if(data!=null){
          console.log("data not null ",data)

    
    }else{
      
    console.log("data is null", this.Data);
}

        
      },
      error =>{
        console.log(error)
      }
    )
    console.log("", this.res);
    this.route.navigate(['order'], {queryParams:{request: this.Data}}); // navigate to other page

  }
}
