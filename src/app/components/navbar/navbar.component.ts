import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:string;
  showRegister:boolean;

  constructor(
    private toastr:ToastrService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
     if(auth){
       this.isLoggedIn=true;
       this.loggedInUser= auth.email;
     }else {
       this.isLoggedIn=false;
     }
    });
  }

  onLogoutClick(){
    this.authService.logout();
    this.toastr.success("Logged out successfully");
    this.router.navigate(['/login']);
  }
}
