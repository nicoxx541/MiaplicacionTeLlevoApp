
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.page.html',
  styleUrls: ['./lista-vehiculos.page.scss'],
})
export class ListaVehiculosPage {
  vehiculos = [
    { patente: 'ABC123', marca: 'Toyota', modelo: 'Corolla', anio: 2020, color: 'Rojo' },
    { patente: 'DEF456', marca: 'Honda', modelo: 'Civic', anio: 2021, color: 'Azul' },
  ];

  constructor() {}
}
