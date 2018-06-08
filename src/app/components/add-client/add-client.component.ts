import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import {detachEmbeddedView} from "@angular/core/src/view";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['add-client.component.scss']
})
export class AddClientComponent implements OnInit , OnDestroy{
client:Client ={
  firstName : '',
  lastName : '',
  email : '',
  phone : '',
  balance : 0
}

disableBalanceOnAdd:boolean = false;
  constructor(
    public flashMessagesService : FlashMessagesService,
    public router : Router,
    public clientService : ClientService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
   this.flashMessagesService;
  }

  onSubmit({value , valid}:{value:Client , valid:boolean}){
    if(this.disableBalanceOnAdd)
    {
      value.balance=0;
    }
    if(!valid){
      this.flashMessagesService.show('Please Fill all details', {cssClass:'flash-alert',timeout:4000});
      this.router.navigate(['add-client']);
    }
    else {
        this.clientService.newClient(value);
      // this.flashMessagesService.show('New Client added Successfully', {cssClass:'flash-success',timeout:4000});
      this.router.navigate(['/']);
    }
  }
}
