import {Injectable} from '@angular/core';
import {Client} from '../models/Client';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: AngularFireList<any>;
  client: AngularFireObject<any>;

  constructor(public  af: AngularFireDatabase) {
    this.clients = this.af.list('/clients') as AngularFireList<Client[]>;
  }

  getClients() {
    return this.clients;
  }

  newClient(client:Client){
    this.clients.push(client);
  }

  getClient(id:string){
    this.client = this.af.object('/clients/'+id) as AngularFireObject<Client>;
    return this.client;
  }
}

