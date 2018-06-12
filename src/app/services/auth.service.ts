import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }

  login(email:string ,password:string){
    let promise= new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then(userdata =>resolve(userdata),err=>reject(err));
    });
    return promise;
  }
}
