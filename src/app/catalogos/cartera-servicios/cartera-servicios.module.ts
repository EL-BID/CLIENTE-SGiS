/**
* <h1>Cartera de Servicios Module</h1>
*<p>
* El modulo Cartera de Servicios es un catálogo para agregar los
* Recursos que tiene una unidad medica, como lo son medicamentos y personal.
* </p>
*
* @author  Javier Alejandro Gosain Díaz
* @version 2.0
* @since   2018-04-30 
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//modulos
import { HubModule } from '../../hub/hub.module';
import { PerfilModule } from '../../perfil/perfil.module';
import { BloquearPantallaModule } from '../../bloquear-pantalla/bloquear-pantalla.module';
import { CarteraServiciosRoutingModule } from './cartera-servicios-routing.module';
import { PaginacionModule } from '../../parcial/paginacion/paginacion.module';

//componentes del catalogo
import { PipesModule }             from '../../pipes/pipes.module';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';

//servicios
import { AuthService } from '../../auth.service';

import { MenuModule } from '../../menu/menu.module';
import { ParcialModule } from '../../parcial/parcial.module';

//crud
import { CrudService } from '../../crud/crud.service';
import { CrudModule }  from '../../crud/crud.module';
//fin crud




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HubModule,
    PerfilModule,
    BloquearPantallaModule,
    PaginacionModule,
    PipesModule,
    MenuModule, 
    ParcialModule,
    CarteraServiciosRoutingModule,
    CrudModule
  ],
  declarations: [
    ListaComponent,
    FormularioComponent
  ],
  providers:[AuthService, CrudService ],
})
export class CarteraServiciosModule { }
