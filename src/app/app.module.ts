import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { UsertablesComponent } from './usertables/usertables.component';
import { AdmintablesComponent } from './admintables/admintables.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    FooterComponent,
    RegisterComponent,
    UploadComponent,
    RegisteradminComponent,
    UsertablesComponent,
    AdmintablesComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
