import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params} from '@angular/router';;

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit, Client {
  $key:string;
  id : string;
  hasBalance : boolean = false;
  isBalanceUpdated : boolean =false;
  client : any;

  constructor(
    public clientService : ClientService,
    public toastrService : ToastrService,
    public router : Router,
    public routes : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params['id'];
    console.log(this.id);
    this.clientService.getClient(this.id).valueChanges().subscribe(client =>{
      this.client = client;
      if(client.balance > 0){
        this.hasBalance = true;
      }
    });

    // this.clientService.getClient(this.id).snapshotChanges().subscribe(clients_1=>{
    //   this.clients_1=clients_1;
    //   console.log(this.clients_1);
    // });
  }

}
