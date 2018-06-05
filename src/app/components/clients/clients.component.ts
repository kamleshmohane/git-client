import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/Client';
import {config} from "rxjs";
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['clients.component.scss']
})
export class ClientsComponent implements OnInit, Client {
  $key: string;
  clients: any;
  clients_1: any;

  constructor(public clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.getClients().valueChanges().subscribe(clients => {
      this.clients = clients;
      console.log(this.clients);
      console.log('data1', this.clients_1);
      this.clients.forEach((item, index) => {
        item.keyData = this.clients_1[index];
      });
      console.log(this.clients);
    });
    this.clientService.getClients().snapshotChanges().subscribe(clients_1 => {
      this.clients_1 = clients_1;
      console.log(this.clients_1);
    });
  }
}
