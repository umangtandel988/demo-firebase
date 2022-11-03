import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm : FormGroup;

  constructor(private authService : AuthService) {
    this.signupForm = new FormGroup({
      name : new FormControl('', Validators.required),
      age : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.signupForm.value);
    this.authService.signup(this.signupForm.value)
  }

}
