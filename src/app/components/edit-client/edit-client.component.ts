import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  id:string;
  client:Client = {
    firstName : '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }
  disabledBalanceOnEdit:boolean = true;
  constructor(
    public clientService : ClientService,
    public toastService : ToastrService,
    public router: Router,
    public routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params['id'];
    this.clientService.getClient(this.id).valueChanges().subscribe(client =>{
      this.client = client;
    });
  }

  onSubmit({value, valid}:{value: Client , valid: boolean}) {

    if (!valid) {
      this.toastService.warning('Please Fill all details');
    } else {
      this.clientService.updateClient(this.id ,value);
      this.toastService.success('Client Details updated');
      this.router.navigate(['/client/'+this.id]);
    }
  }
}
