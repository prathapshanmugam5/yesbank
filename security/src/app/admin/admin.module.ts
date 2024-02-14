import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GetalldataComponent } from './getalldata/getalldata.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoanlistComponent } from './loanlist/loanlist.component';
import { GetalluserComponent } from './getalluser/getalluser.component';


@NgModule({
  declarations: [
    GetalldataComponent,
    HomepageComponent,
    LoanlistComponent,
    GetalluserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
