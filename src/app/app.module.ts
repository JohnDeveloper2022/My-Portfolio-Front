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
import { FormEducacionComponent } from './components/educacion/form-educacion.component';
import { PorfolioComponent } from './components/portfolio/porfolio.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', component: PorfolioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'edicion', component: PorfolioComponent},
  { path: 'estudios', component: EducacionComponent},
  { path: 'estudios/:id', component: EducacionComponent},  
  { path: 'estudios/form', component: FormEducacionComponent},
  { path: 'experiencia/editar/:id', component: ExperienciaComponent},
  { path: 'experiencia/eliminar/:id', component: ExperienciaComponent},
  { path: 'sobreMi/editar/:id', component: SobreMiComponent},
  { path: 'sobreMi/foto/editar/:id', component: SobreMiComponent},
  { path: 'sobreMi/datos/editar/:id', component: SobreMiComponent},
  { path: 'skills/agregar', component: SkillsComponent},
  { path: 'skills/editar/:id', component: SkillsComponent},
  { path: 'skills/eliminar/:id', component: SkillsComponent},
  { path: 'idiomas/agregar', component: IdiomasComponent},
  { path: 'idiomas/editar/:id', component: IdiomasComponent},
  { path: 'idiomas/eliminar/:id', component: IdiomasComponent},
  { path: 'proyectos/agregar', component: ProyectosComponent},
  { path: 'proyectos/editar/:id', component: ProyectosComponent},
  { path: 'proyectos/eliminar/:id', component: ProyectosComponent}

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
    FormEducacionComponent,
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
