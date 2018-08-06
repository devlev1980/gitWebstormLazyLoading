import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {SharedModule} from '../shared.module';
import {FirebaseAuthService} from '../services/firebase-auth.service';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [SignupComponent],
  providers: [FirebaseAuthService]
})
export class SignupModule { }
