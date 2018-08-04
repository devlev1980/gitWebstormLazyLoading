import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {SharedModule} from '../shared.module';
import {LoginComponent} from './login.component';
import {FirebaseAuthService} from '../services/firebase-auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],

  declarations: [LoginComponent],
  providers: [FirebaseAuthService]
})
export class LoginModule { }
