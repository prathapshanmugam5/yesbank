import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BankcustomerComponent } from './bankcustomer/bankcustomer.component';
import { LoginComponent } from './login/login.component';
import { BankdetailComponent } from './bankdetail/bankdetail.component';
import { LoanComponent } from './loan/loan.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoanappComponent } from './loanapp/loanapp.component';
import { CreditComponent } from './credit/credit.component';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user",component:UserComponent},
  {path:"signin",component:BankcustomerComponent},
  {path:"login",component:LoginComponent},
  {path:"getid/:username",component:BankdetailComponent},
  {path:"name",component:BankdetailComponent},
  {path:"loan",component:LoanComponent},
  {path:"getall",component:TransactionComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"deposit",component:DepositComponent},
  {path:"loanapp",component:LoanappComponent},
  {path:"credit",component:CreditComponent},
  {path:"loanapply",component:LoanapplicationComponent},
  {path:"test",component:TestComponent},
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(i=>i.AdminModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
