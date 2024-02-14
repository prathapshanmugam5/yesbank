import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
 constructor(private route:Router){}

 applycredit(){
  this.route.navigate(["admin","creditcardapplication"])
 }
 applyloan(){
  this.route.navigate(["admin","loanapplication"])
 }
 userinfo(){
  this.route.navigate(["admin","userinfo"])
 }
}
