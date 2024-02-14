import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Security } from 'src/app/security';
import { SecurityService } from 'src/app/security.service';

@Component({
  selector: 'app-getalluser',
  templateUrl: './getalluser.component.html',
  styleUrls: ['./getalluser.component.css']
})
export class GetalluserComponent implements OnInit {
  constructor(private ser:SecurityService,private route:Router){}
  
  security:Security[]=[];
  ngOnInit(): void {
    this.ser.getalluserinfo().subscribe((res)=>{
      this.security=res;
      console.log(res);
    })
  }

}
