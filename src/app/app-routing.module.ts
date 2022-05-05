import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { FavorisComponent } from './favoris/favoris.component';
import { MessagesComponent } from './messages/messages.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddAnnounceComponent } from './add-announce/add-announce.component';
import { SaleComponent } from './sale/sale.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'favoris', component: FavorisComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'LogIn', component: ConnexionComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'product/:id', component: ProductdetailsComponent},
  {path: 'addAnnounce', component: AddAnnounceComponent},

  {path: 'sale', component:SaleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
