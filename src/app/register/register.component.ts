import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  protected form: FormGroup;
  customer: any = null;
  idcustomer: any = null;

  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    
  ) {
    this.form = this.formBuilder.group(
      {
        name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        lastname: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
        birthdate: [null, [Validators.required]],
        gender: [[Validators.required]],
        city: [[Validators.required]],
      }
    );

    this.route.params.subscribe(params => {
      const idcustomer = +params['idcustomer'];
      this.getcustomer(idcustomer);
    });
  }

  save() {
    if (this.form.status === 'VALID') {
      const url = 'http://localhost:3000/register';
      this.httpClient.post(url, this.form.value).subscribe(response => {
        alert(response);
      });
      alert('¡Registro válido!');
    } else {
      this.form.markAllAsTouched();
      alert('Por favor, completa los campos correctamente.')
    }


  }

  update(idcustomer: number) {
    const url = 'http://localhost:3000/register/' + idcustomer;
    this.httpClient.put(url, this.form.value).subscribe(response => {
      alert(response);
    });
  }

  getcustomer(idcustomer: number) {
    const url = 'http://localhost:3000/register/' + idcustomer;
    this.httpClient.get(url).subscribe(response => {
      if (response) {
        this.form.patchValue(response);
      }
    });
  }
}

/*delete(idcustomer: number) {
  const url = 'http://localhost:3000/register/' + idcustomer;
  this.httpClient.delete(url).subscribe(response => {
    alert(response);
  });
}*/


