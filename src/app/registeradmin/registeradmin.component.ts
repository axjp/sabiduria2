import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrl: './registeradmin.component.css'
})
export class RegisteradminComponent {
  protected form: FormGroup;
  admninistrator: any = null;
  idadmninistrator: any = null;

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
      }
    );

    this.route.params.subscribe(params => {
      const idadmninistrator = +params['idadmninistrator'];
      this.getadmninistrator(idadmninistrator);
    });
  }

  save() {
    const url = 'http://localhost:3000/registeradmin';
    this.httpClient.post(url, this.form.value).subscribe(response => {
      alert(response);
    });
    if (this.form.status === 'VALID') {
      alert('¡Registro válido!');
    } else {
      this.form.markAllAsTouched();
      alert('Por favor, completa los campos correctamente.')
    }
  }

  update(idadmninistrator: number) {
    const url = 'http://localhost:3000/registeradmin/' + idadmninistrator;
    this.httpClient.put(url, this.form.value).subscribe(response => {
      alert(response);
    });
  }

  getadmninistrator(idadmninistrator: number) {
    const url = 'http://localhost:3000/registeradmin/' + idadmninistrator;
    this.httpClient.get(url).subscribe(response => {
      if (response) {
        this.form.patchValue(response);
      }
    });
  }
}