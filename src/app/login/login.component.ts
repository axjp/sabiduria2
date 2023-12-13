import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected form: FormGroup;
  email: string='';
  password: string='';

  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router) {
    this.form = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
      }
    );
  }


  

  login(): void {
    if (this.form.valid) {
      const data = this.form.value;
      const url = 'http://localhost:3000/login';
      this.httpClient.post<any>(url, data).subscribe(
        (response) => {
          if (response.success) {
            // Hacer algo cuando el inicio de sesión es exitoso
            alert('Inicio de sesión exitoso');
          } else {
            // Manejar diferentes escenarios de error
            console.error('Error en el inicio de sesión:', response.message);
          }
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }
}

 /* save(): void {
    if (this.form.status === 'VALID') {
      alert('Valido');
    } else {
      this.form.markAllAsTouched();
      alert('Llene los campos')
    }
  }*/

