import {Component, OnInit } from '@angular/core';
import {Client} from '../../models/Client';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['add-client.component.scss']
})
export class AddClientComponent implements OnInit {
    client: Client = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: 0
    }

    disableBalanceOnAdd: boolean = false;

    constructor(
                public router: Router,
                public clientService: ClientService,
                private toastr: ToastrService) {

    }

    ngOnInit() {
    }


    onSubmit({value, valid}:{value: Client , valid: boolean}) {
        if (this.disableBalanceOnAdd) {
            value.balance = 0;
        }
        if (!valid) {
            this.toastr.warning('Please Fill all details');
        } else {
            this.clientService.newClient(value);
            this.toastr.success('New Client added Successfully');
            this.router.navigate(['/']);
        }
    }
}
