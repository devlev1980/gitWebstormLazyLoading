import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';
import {FirebaseAuthService} from '../services/firebase-auth.service';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {} as User;

  constructor(public fbAuth: FirebaseAuthService, private router: Router) {
  }

  loginWithGoogle() {
    this.fbAuth.signInWithGoogle();
    this.router.navigate(['/']);

  }

  loginWithFacebook() {
    this.fbAuth.signInWithFacebook().then(success => {
      this.router.navigate(['/']);

    });

  }

  loginWithGithub() {
    this.fbAuth.signInWithGitHub().then(success=>{
      this.router.navigate(['/']);
    });

  }

  login(form) {
    this.fbAuth.loginWithEmailPassword(form.email, form.password);
    this.router.navigate(['/']);
  }


}
