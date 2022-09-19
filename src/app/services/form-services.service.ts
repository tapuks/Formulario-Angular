import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class FormServicesService {
  personaArray : Persona[]

  constructor() {
    this.personaArray = []
  }
  
  addPersona(persona:Persona) {
    this.personaArray.push(persona);
    console.log('array', this.personaArray)
  }

  getAll(): Promise<Persona[]>{
    return new Promise<Persona[]>((resolve, reject) => {
      resolve(this.personaArray)
    })
  }
}
