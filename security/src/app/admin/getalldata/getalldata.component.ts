import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credit } from 'src/app/credit';
import { SecurityService } from 'src/app/security.service';

@Component({
  selector: 'app-getalldata',
  templateUrl: './getalldata.component.html',
  styleUrls: ['./getalldata.component.css']
})
export class GetalldataComponent implements OnInit {
  constructor(private ser:SecurityService,private route:Router){}
 
  credit:Credit[]=[];
  ngOnInit(): void {
    this.ser.creditapply().subscribe((res)=>{

      this.credit=res;
      console.log(res)
    })
  }
  deleteid(id:number){
     this.ser.deletecreditcardapplication(id).subscribe((res)=>{
       console.log("succesully delete");
       this.ngOnInit();
     })
  }

}
