///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],



})

export class AppComponent implements OnInit {
  user: Observable<firebase.User>;


  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.user;
  }

  ngOnInit(): void {


  }

  logOutFromGoogle() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);

  }

  getArtist() {
    // this.spotifyService.getArtist('muse').subscribe(data=>{
    //   console.log(data);
    // })
  }

}
