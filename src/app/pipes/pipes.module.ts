/**
* <h1>Pipes Module</h1>
*<p>
* El modulo Pipes realiza filtros, busquedas, tiempos,
* coversion de elementos en el HTML.
* </p>
*
* @author  Javier Alejandro Gosain Díaz
* @version 2.0
* @since   2018-04-30 
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarModuloPipe } from './buscar-modulo.pipe'
import { GroupByPipe } from './groupBy.pipe';
import { OrderByPipe } from './orderBy.pipe';
import { BuscarPipe } from './buscar.pipe';
import { FormatoFechaPipe } from './formato-fecha.pipe';
import { TranscurridoPipe } from './transcurrido.pipe';
import { formatoHtmlPipe } from './formatoHtml.pipe';
import { NgInit } from '../directives/ng-init.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BuscarModuloPipe,
    GroupByPipe,
    OrderByPipe,
    BuscarPipe,
    FormatoFechaPipe,
    TranscurridoPipe,
    formatoHtmlPipe,
    NgInit
  ],
  declarations: [BuscarModuloPipe, GroupByPipe, OrderByPipe, BuscarPipe, FormatoFechaPipe, TranscurridoPipe, formatoHtmlPipe, NgInit]
})
export class PipesModule { }
