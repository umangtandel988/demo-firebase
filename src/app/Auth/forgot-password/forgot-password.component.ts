import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public enteredEmail : string;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(email : string){
    console.log(email)
    this.authService.forgotPassword(email);
  }

}
