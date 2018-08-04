import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SharedModule} from './shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FirebaseAuthService} from './services/firebase-auth.service';






@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
