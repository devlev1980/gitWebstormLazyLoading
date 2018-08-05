import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../shared.module';
import {LoginComponent} from './login.component';
import {FirebaseAuthService} from '../services/firebase-auth.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })

  ],

  declarations: [LoginComponent],
  providers: [FirebaseAuthService, ToastrService]
})
export class LoginModule {
}
