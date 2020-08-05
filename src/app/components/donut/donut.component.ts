import { Component, OnInit, Output, Input } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: []
})
export class DonutComponent implements OnInit {

  @Input() title = '';
  @Input() data = [350, 450, 100];
  @Input() labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];


  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ]

  constructor() { }

  ngOnInit() {
  }




}
