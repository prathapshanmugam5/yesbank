import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GetalldataComponent } from './getalldata/getalldata.component';
import { LoanlistComponent } from './loanlist/loanlist.component';
import { GetalluserComponent } from './getalluser/getalluser.component';

const routes: Routes = [
  {path:"adminhomepage",component:HomepageComponent},
  {path:"creditcardapplication",component:GetalldataComponent},
  {path:"loanapplication",component:LoanlistComponent},
  {path:"userinfo",component:GetalluserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
