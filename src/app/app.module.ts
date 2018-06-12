import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

//Angular Firebase imports
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

//components imports
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClientsComponent} from './components/clients/clients.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SettingsComponent} from './components/settings/settings.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//service import
import {ClientService} from './services/client.service';
import {NgxSpinnerModule} from "ngx-spinner";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-client',
    component: AddClientComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'client/:id',
    component: ClientDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-client/:id',
    component: EditClientComponent,
    canActivate:[AuthGuard]
  }
];

export const firebaseConfig = {
  apiKey: "AIzaSyCOW4KjdWqS1NioDCIigwDAYp4kDlQLhPQ",
  authDomain: "clientpanel-fadc8.firebaseapp.com",
  databaseURL: "https://clientpanel-fadc8.firebaseio.com",
  storageBucket: "clientpanel-fadc8.appspot.com",
  messagingSenderId: "790037845435"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    NgxSpinnerModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
