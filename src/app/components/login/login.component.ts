import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {catchError} from "rxjs/internal/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(
    public toastService:ToastrService,
    public router:Router,
    public authService:AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.email , this.password)
      .then((res)=>{
        this.toastService.success("Login in Successfully...");
        this.router.navigate(['/']);
      })
      .catch((err)=>{
        this.toastService.error(err.message);
      this.router.navigate(['/login']);
    });
  }
}
