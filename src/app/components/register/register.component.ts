import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;

  constructor(
    public toastr:ToastrService,
    public router: Router,
    public authService:AuthService
  ) {
  }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.register(this.email,this.password)
      .then(res =>{
        this.toastr.success("User registered Successfully");
        this.router.navigate(['/']);
      })
      .catch(err =>{
        this.toastr.error(err.message);
        this.router.navigate(['/login']);
      });
  }
}
