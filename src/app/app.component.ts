import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {auth} from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor( public afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {

  }
  logOutFromGoogle(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);

  }

}
