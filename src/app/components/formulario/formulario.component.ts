import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormServicesService } from 'src/app/services/form-services.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    edad: new FormControl(null, [Validators.required, this.validateEdad]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/)]),
    departamento: new FormControl(''),
    password: new FormControl('', [Validators.required, this.validatePassword])
  })
  constructor(private formService: FormServicesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.formService.addPersona(this.formulario.value)
  }

  validateEdad(FormControl: any) {
    if (FormControl.value < 18) {
      return {validateEdad: 18}
    }
    return null
  }

  validatePassword(FormControl: any) {
    if (FormControl.value.length >= 6 && FormControl.value.length <= 15) {
      return null
    }
      return {validatePassword: 'El campo debe tener de 6 a 15 caracteres'}
  }

}
