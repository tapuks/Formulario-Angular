import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PersonasComponent } from './components/personas/personas.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  {path: 'personas', component: PersonasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
