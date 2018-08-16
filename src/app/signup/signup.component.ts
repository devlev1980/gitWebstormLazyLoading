import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {FirebaseAuthService} from '../services/firebase-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {} as User;

  constructor(private _fbService: FirebaseAuthService,private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    // console.log(form);
    this._fbService.signupWithEmailPassword(form.email, form.password);
    this.router.navigate(['/']);
  }

}
