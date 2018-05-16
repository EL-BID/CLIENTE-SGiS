/**
* dependencias a utilizar
*/
import { Component, OnInit } from '@angular/core';

/**
* selector si se desea ocupar en un HTML
* y su archivo HTML
*/
@Component({
  selector: 'usuarios-lista',
  templateUrl: './lista.component.html'
})

/**
* Esta clase muestra la lista del componente
* de acuerda a la ruta para acceder a los datos a mostrar.
*/
export class ListaComponent{

  /**
  * Contiene el tamaño del cuerpo de la seccion donde esten los controles en la vista.
  * @type {string}
  */
  tamano = document.body.clientHeight;
}