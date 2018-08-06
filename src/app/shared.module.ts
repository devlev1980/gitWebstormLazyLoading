import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiProviderService} from './services/api-provider.service';
import {CustomerService} from './services/customer.service';
import {ClarityModule} from '@clr/angular';
import {FirebaseAuthService} from './services/firebase-auth.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,

  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule

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
