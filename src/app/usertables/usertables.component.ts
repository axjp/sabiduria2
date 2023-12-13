import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertables',
  templateUrl: './usertables.component.html',
  styleUrl: './usertables.component.css'
})
export class UsertablesComponent {
  customers: any = null;
  

  constructor(private httpClient: HttpClient, private router: Router) {

    this.getcustomers();
  }

  getcustomers() {
    const url = 'http://localhost:3000/register';
    this.httpClient.get<any>(url).subscribe(response => {
      this.customers = response;
    });
  }
  delete(idcustomer: number) {
    const url = 'http://localhost:3000/register/' + idcustomer;
    this.httpClient.delete(url).subscribe(response => {
      this.getcustomers();
    });
  }

  update(idcustomer: number) {
    this.router.navigate(['/register', idcustomer])
  }
}

