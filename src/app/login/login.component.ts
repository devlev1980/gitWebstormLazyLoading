import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';
import {FirebaseAuthService} from '../services/firebase-auth.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User;

  constructor(public fbAuth: FirebaseAuthService, private router: Router) {
  }

  loginWithGoogle() {
    this.fbAuth.signInWithGoogle().then(user => {
      console.log(user);
    });
    this.router.navigate(['/']);

  }

  loginWithFacebook() {
    this.fbAuth.signInWithFacebook();
  }


}
