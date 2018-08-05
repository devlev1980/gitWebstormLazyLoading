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
  user: User;
  isLoggedIn: boolean = false;
  constructor(public fbAuth: FirebaseAuthService, private router: Router, private toastr: ToastrService) {
  }

  loginWithGoogle() {
    this.fbAuth.signInWithGoogle().then(user => {
        this.isLoggedIn = true;
        if (user.user.emailVerified){
          this.toastr.success('everything is broken', 'Major Error', {
            timeOut: 3000
          });
        }
        console.log(user.additionalUserInfo);

        // this.toastr.error('Something went wrong.Please try again later')

    });
    this.router.navigate(['/']);

  }

  loginWithGithub() {
    this.fbAuth.signInWithGitHub();
  }

  loginWithFacebook() {
    this.fbAuth.signInWithFacebook().then(user => {
      console.log(user);
    });
  }


}
