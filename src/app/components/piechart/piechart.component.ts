import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { chartsFields } from 'src/app/models/ChartsFields/chartsFields';

@Component({
  selector: 'piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  @Input('ChartData') ChartData:chartsFields[];

  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    console.log(this.ChartData);
  }


  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  pieChartLabels: Label[] = [];
  pieChartData: SingleDataSet = [];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  

  ngOnInit(): void {
    console.log(this.ChartData);
    this.pieChartData = [
      141842,147195,8315,8498
    ];
  }

}
