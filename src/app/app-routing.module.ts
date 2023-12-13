import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { UsertablesComponent } from './usertables/usertables.component';
import { AdmintablesComponent } from './admintables/admintables.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register/:idcustomer', component: RegisterComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'registeradmin/:idadministrator', component: RegisteradminComponent },
  { path: 'usertables', component:UsertablesComponent },
  { path: 'admintables', component:AdmintablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
