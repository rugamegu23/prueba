import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}

  name = 'Angular ' + VERSION.major;

  formGroup = this.formBuilder.group({
    cajaTexto: '',
    cajaNumerica: '',
    selector: '',
    comentario: '',
  });

  submit(): void {
    console.log('Submit');
  }
}
