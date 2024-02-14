import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { Security } from '../security';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 constructor(private ser:SecurityService,private route:Router){}
 showPassword: boolean = false;
 
 FormOne=new FormGroup({
  email:new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl(),
  roles:new FormControl('', Validators.required),
  name:new FormControl('', Validators.required),
  fathername:new FormControl('', [Validators.required, Validators.minLength(3)]),
    age:new FormControl('', [Validators.required, Validators.min(18)]),
    gender:new FormControl('', Validators.required),
    mobile:new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    aadharno:new FormControl('', [Validators.required, Validators.pattern(/^\d{12}$/)]),
    panno:new FormControl('', [Validators.required, Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/)]),
    address:new FormControl('',[Validators.required, Validators.minLength(5)]),
    accountnumber:new FormControl(),
    ifccode:new FormControl(),
    image: new FormControl(),
    

});
sub(){

  // Generate a random account number
  const accountnumber = Math.floor(100000000000 + Math.random() * 900000000000);

  const accountNumberString = accountnumber.toString().padStart(12, '0');

// Create the final IFC code by concatenating 'YES' and the padded accountNumber
const ifccode = 'YES' + accountNumberString;
  // Assign the generated number to the 'accountNumber' control
  this.FormOne.patchValue({ accountnumber });
  this.FormOne.patchValue({ifccode})

 

 
  const form=this.FormOne.value as Security
    this.ser.userpost(form).subscribe((res)=>{
      console.log(res);
      alert('Successfully saved!');
      
      
      this.route.navigate(['login']);
    })
}
cancel(){
  this.route.navigate([''])
}
onFileChange(event: any) {
  const reader = new FileReader();

  if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.FormOne.patchValue({
        image: reader.result
      });
    };
  }
}
}
