import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseAuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = this._firebaseAuth.authState;

    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup((new firebase.auth.GoogleAuthProvider()));
  }
  signInWithFacebook(){
    return this._firebaseAuth.auth.signInWithPopup((new firebase.auth.FacebookAuthProvider()));
  }
  signOut(){
    return this._firebaseAuth.auth.signOut();
  }

}
