import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';
import {FirebaseAuthService} from '../services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(public fbAuth: FirebaseAuthService) {
  }

  loginWithGoogle() {
    this.fbAuth.signInWithGoogle().then(user=>{
      console.log(user);
    });
  }


}
