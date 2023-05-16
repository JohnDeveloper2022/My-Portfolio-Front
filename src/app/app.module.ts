import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PorfolioComponent } from './components/portfolio/porfolio.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: PorfolioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'estudios', component: EducacionComponent},
  { path: 'estudios/editar/:id', component: EducacionComponent},
  { path: 'estudios/eliminar/:id', component: EducacionComponent},
  { path: 'experiencias', component: ExperienciaComponent},  
  { path: 'experiencias/editar/:id', component: ExperienciaComponent},
  { path: 'experiencias/eliminar/:id', component: ExperienciaComponent},
  { path: 'sobremi', component: SobreMiComponent},
  { path: 'sobremi/editar/:id', component: SobreMiComponent},
  { path: 'sobremi/editar/foto/:id', component: SobreMiComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'skills/editar/:id', component: SkillsComponent},
  { path: 'skills/eliminar/:id', component: SkillsComponent},
  { path: 'idiomas', component: IdiomasComponent},
  { path: 'idiomas/editar/:id', component: IdiomasComponent},
  { path: 'idiomas/eliminar/:id', component: IdiomasComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'proyectos/editar/:id', component: ProyectosComponent},
  { path: 'proyectos/eliminar/:id', component: ProyectosComponent},
  { path: '', redirectTo: '/portfolio', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    IdiomasComponent,
    ProyectosComponent,
    FooterComponent,
    ContactoComponent,
    PorfolioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
