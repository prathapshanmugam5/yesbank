import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Newaccount } from 'src/app/newaccount';
import { SecurityService } from 'src/app/security.service';

@Component({
  selector: 'app-loanlist',
  templateUrl: './loanlist.component.html',
  styleUrls: ['./loanlist.component.css']
})
export class LoanlistComponent implements OnInit{
  constructor (private ser:SecurityService,private route:Router){}
 
  loanapp:Newaccount[]=[];
  ngOnInit(): void {
      this.ser.bankloan().subscribe((res)=>{
        this.loanapp=res;
      })
    }
  deleteid(id:number){
    this.ser.deleteloanapplication(id).subscribe((res)=>{
      console.log("successfully delete");
      this.ngOnInit();
    })
  }
}
