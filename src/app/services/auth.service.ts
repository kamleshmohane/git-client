import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }

  //login user
  login(email:string ,password:string){
    let promise= new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then(userdata =>resolve(userdata),err=>reject(err));
    });
    return promise;
  }

  //check status of login
  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  // logout user
  logout(){
    this.afAuth.auth.signOut();
  }
}
