import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from '../models/Client';
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database-deprecated";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: AngularFireList<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(public  af: AngularFireDatabase) {
    this.clients = this.af.list('/clients') as AngularFireList<Client[]>;
  }


  getClients() {
    return this.clients;
  }
}
