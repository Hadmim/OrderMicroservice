import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order.page.component';
import { ClientFormComponent } from './composents/client-form/client-form.component';
import { ConfirmDialogComponent } from './composents/confirm-dialog/confirm-dialog.component';
import { PayeOrderComponent } from './composents/paye-order/paye-order.component';
import { SummaryComponent } from './composents/summary/summary.component';
import { MaterialModule } from '@shared/modules/material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrderPageComponent,
    ClientFormComponent,
    ConfirmDialogComponent,
    PayeOrderComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule 
  
  ],
  exports:[
    OrderPageComponent,
    ClientFormComponent,
    ClientFormComponent,
    PayeOrderComponent,
    SummaryComponent,
    MaterialModule
  ],
  providers:[]
})
export class OrderPageModule { }
