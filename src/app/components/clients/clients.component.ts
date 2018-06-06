import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/Client';
import {config} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['clients.component.scss']
})
export class ClientsComponent implements OnInit, Client {
  $key: string;
  clients: any;
  clients_1: any;
  totalOwed: number;

  constructor(public clientService: ClientService, private spinner: NgxSpinnerService) {
    this.spinner.show();
  }

  ngOnInit() {
    this.clientService.getClients().valueChanges().subscribe(clients => {
      this.clients = clients;
      this.getTotalOwed();
      this.clients.forEach((item, index) => {
        if (this.clients_1)
          item.keyData = this.clients_1[index];
      });
    });
    this.clientService.getClients().snapshotChanges().subscribe(clients_1 => {
      this.clients_1 = clients_1;
      this.spinner.hide();
    });
  }

  getTotalOwed() {
    let total = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total += parseFloat(this.clients[i].balance);
    }
    this.totalOwed = total;
    console.log(this.totalOwed);
  }
}
