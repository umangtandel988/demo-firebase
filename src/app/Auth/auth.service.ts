import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  public user: Observable<User>;
  public userDetails: User = null;

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

    public signup(data){
      this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log(res);
      })
    }

    public login(data){
      this.afAuth.signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['../pages'])
      })
    }

    public forgotPassword(email : string){
        this.afAuth.sendPasswordResetEmail(email).then( res => {
          console.log("Link sent successfully")
        })
    }
}
