import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  protected form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        bookTitle: [null, [Validators.required]],
        nameAuthor: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        yearPublication: [null, [Validators.required]],
        editorial: [null, [Validators.required]],
        description: [null, [Validators.required]],
        pdfFile: [null, [Validators.required]],

      }
    );
  }
  save(): void {
    if (this.form.status === 'VALID') {
      alert('Valido');
    } else {
      this.form.markAllAsTouched();
      alert('Llene los campos')
    }
  }

}