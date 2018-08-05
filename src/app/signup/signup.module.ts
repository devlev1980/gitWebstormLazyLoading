import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
