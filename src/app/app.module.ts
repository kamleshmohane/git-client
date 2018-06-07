import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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

//service import
import {ClientService} from './services/client.service';
import {NgxSpinnerModule} from "ngx-spinner";

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
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
    component: AddClientComponent
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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    NgxSpinnerModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
