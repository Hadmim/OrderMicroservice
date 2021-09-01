/** Angular core dependencies */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/** Third party modules */


/** Custom Components */
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


/** Custom Components Registration*/
export const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
];

@NgModule({
  imports: [
    /** Angular core dependencies */
    CommonModule,
    RouterModule,
    /** Third party modules */

  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
