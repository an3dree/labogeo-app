import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { MembrosComponent } from './components/membros/membros.component';
import { ProjetosComponent } from './components/projetos/projetos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'membros', component: MembrosComponent},
  { path: 'projetos', component: ProjetosComponent},
  { path: 'sobre', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
