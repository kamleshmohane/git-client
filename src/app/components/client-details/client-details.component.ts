import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {any} from "codelyzer/util/function";
;

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit, Client {
  $key:string;
  id : string;
  hasBalance : boolean = false;
  showBalanceUpdated : boolean =false;
  client : any;

  constructor(
    public clientService : ClientService,
    public toastrService : ToastrService,
    public router : Router,
    public routes : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params['id'];
    this.clientService.getClient(this.id).valueChanges().subscribe(client =>{
      this.client = client;
      if(client.balance > 0 ){
        this.hasBalance = true;
      }
    });
  }

  updateBalance(id:any){
    this.clientService.updateClient(this.id , this.client);
    this.toastrService.success("Balance Updated");
    this.router.navigate(['/client/'+this.id]);
  }

  onClickDelete(){
    if(confirm("Are you sure you want to delete?")){
      this.clientService.clientDeleted(this.id);
      this.toastrService.info("Client Deleted");
      this.router.navigate(['/']);
    }
  }
}
