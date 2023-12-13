import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admintables',
  templateUrl: './admintables.component.html',
  styleUrl: './admintables.component.css'
})
export class AdmintablesComponent {
  administrators: any = null;
  

  constructor(private httpClient: HttpClient, private router: Router) {

    this.getadministrators();
  }

  getadministrators() {
    const url = 'http://localhost:3000/registeradmin';
    this.httpClient.get<any>(url).subscribe(response => {
      this.administrators = response;
    });
  }
  delete(idadministrator: number) {
    const url = 'http://localhost:3000/registeradmin/' + idadministrator;
    this.httpClient.delete(url).subscribe(response => {
      this.getadministrators();
    });
  }

  update(idadministrator: number) {
    this.router.navigate(['/registeradmin', idadministrator])
  }
}


