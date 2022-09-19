import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { FormServicesService } from 'src/app/services/form-services.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  personas : Persona[] = []
  constructor(private formService: FormServicesService) { }

  async ngOnInit() {
    this.personas = await this.formService.getAll();
  }

}
