import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

  title1 = 'Grafica 1';
  data1 = [33,33,33];
  labels1 = ['Primero', ' Segundo', 'Tercero'];

  title2 = 'Grafica 2';
  data2 = [50,25,25];
  labels2 = ['Primero2', ' Segundo2', 'Tercero2'];

  title3 = 'Grafica 3';
  data3 = [75,10,15];
  labels3 = ['Primero3', ' Segundo3', 'Tercero3'];

  title4 = 'Grafica 4';
  data4 = [10,25,65];
  labels4 = ['Primero4', ' Segundo4', 'Tercero4'];

}
