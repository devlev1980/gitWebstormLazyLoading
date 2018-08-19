import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiProviderService} from './services/api-provider.service';
import {CustomerService} from './services/customer.service';
import {ClarityModule} from '@clr/angular';
import {FirebaseAuthService} from './services/firebase-auth.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {CovalentDataTableModule} from '@covalent/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    PerfectScrollbarModule,




  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    PerfectScrollbarModule,



  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApiProviderService,
        CustomerService,
        FirebaseAuthService
      ]
    };
  }
}
