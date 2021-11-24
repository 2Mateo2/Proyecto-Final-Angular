import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CienciaComponent } from './paginas/ciencia/ciencia.component';
import { FilosoficoComponent } from './paginas/filosofico/filosofico.component';
import { LecturaComponent } from './paginas/lectura/lectura.component';
import { PrestamoComponent } from './paginas/prestamo/prestamo.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ServicioComponent } from './paginas/servicio/servicio.component';
import { TecnologicoComponent } from './paginas/tecnologico/tecnologico.component';
import { Form1Component } from './paginas/form1/form1.component';
import { Form2Component } from './paginas/form2/form2.component';
import { Form3Component } from './paginas/form3/form3.component';


const routes: Routes = [
  {path:'principal',component:PrincipalComponent},
  {path:'ciencia',component:CienciaComponent},
  {path:'filosofico',component:FilosoficoComponent},
  {path:'tecnologico',component:TecnologicoComponent},
  {path:'servicio',component:ServicioComponent},
  {path:'registro',component:RegistroComponent},
  {path:'prestamo',component:PrestamoComponent},
  {path:'lectura',component:LecturaComponent},
  {path:'form1',component:Form1Component},
  {path:'form2',component:Form2Component},
  {path:'form3',component:Form3Component},
  {path:'',redirectTo:'/principal',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

