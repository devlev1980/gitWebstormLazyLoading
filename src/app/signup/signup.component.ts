import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {FirebaseAuthService} from '../services/firebase-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {} as User;

  constructor(private _fbService: FirebaseAuthService) {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this._fbService.signup(form.email, form.password);
  }

}
