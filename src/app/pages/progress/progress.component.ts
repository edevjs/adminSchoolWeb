import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent {

  progreso1 = 25;
  get getProgreso1() {
    return `${ this.progreso1 }%`;
  }
  progreso2 = 35;
  get getProgreso2() {
    return `${ this.progreso2 }%`;
  }


  cambioHijo( valor: number ) {

  }

}
