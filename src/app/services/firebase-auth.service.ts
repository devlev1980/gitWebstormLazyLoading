import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class FirebaseAuthService {
  public user: Observable<firebase.User>;
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

  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup((new firebase.auth.FacebookAuthProvider()));
  }

  signInWithGitHub() {
    return this._firebaseAuth.auth.signInWithPopup((new firebase.auth.GithubAuthProvider()));
  }

  signOut() {
    return this._firebaseAuth.auth.signOut();
  }

  signupWithEmailPassword(email: string, password: string) {
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  loginWithEmailPassword(email: string, password: string) {
    this._firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }


}
