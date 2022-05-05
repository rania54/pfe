import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule  } from 'ng-zorro-antd/upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { FavorisComponent } from './favoris/favoris.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { MessagesComponent } from './messages/messages.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { RegistrationComponent } from './registration/registration.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule } from '@angular/forms';
import { LikebuttonComponent } from './likebutton/likebutton.component';
import { AddAnnounceComponent } from './add-announce/add-announce.component';
import { SaleComponent } from './sale/sale.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfilComponent,
    FavorisComponent,
    MessagesComponent,
    ConnexionComponent,
    RegistrationComponent,
    ProductdetailsComponent,
    LikebuttonComponent,
    AddAnnounceComponent,
    SaleComponent,


  ],
  imports: [
    NzCardModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule ,
    FlexLayoutModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzModalModule,
    NzDividerModule,
    NzFormModule,
    NzPopconfirmModule,
    NzCarouselModule,
    NzCommentModule,
    NzStepsModule,
    NzRadioModule,
    NzSelectModule,
    NzUploadModule,
    BrowserAnimationsModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
