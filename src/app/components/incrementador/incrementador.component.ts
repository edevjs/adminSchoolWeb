import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso = 50;
  @Input() btnClass = 'btn-primary';
  // get getPorcentaje(){
    //   return `${ this.progreso }%`;
    // }

    @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  cambiarValor( valor: number ) {
    if ( this.progreso >=100 && valor >=0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }


  onChange( valor: number ) {
    this.progreso = valor && valor >= 100 ? 100 : valor < 0 ? 0 : valor;
    this.valorSalida.emit(this.progreso);
  }


}
