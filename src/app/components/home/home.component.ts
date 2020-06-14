import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { regionalData } from 'src/app/models/IndiaDataFields/regionalData';
import { chartsFields } from 'src/app/models/ChartsFields/chartsFields';
import { StateDistrictService } from 'src/app/services/state-district.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//#region Variable Fields

  //header component 
  totalHeader: string = "Total Case"
  activeHeader: string = "Active Case";
  recoverHeader: string = "Total Recovered";
  deathHeader: string = "Total Death";
  unIdentifiedHeader: string = "Unidentified";
  totalforiegnHeader: string = "Foriegn Case";

  stateTotalConfirmedHeader: string = "Total Confirmed";
  stateforiegnCaseHeader: string = "Confirmed  Foreign  Cases";
  stateIndianCaseHeaderstring = "Confirmed Indian Cases";
  stateDeathHeader: string = "Death";
  stateRecoverHeader: string = "Recoverd";
  stateActiveHeader: string = "Active Case";

  //pieChartLabels:{active:"Active",recover:"Recover",death:"Death",unidentified:"UnIdentified"};
  ChartData: chartsFields[] = [];

  unidentified: number;
  totalcase: number;
  Indiatotalcase: number;
  Foreigntotalcase: number;
  death: number;
  discharged: number;
  activeCase: number;
  regionaldata: any[] = [];
  districtData: any[] = [];

  stateConfirmedCasesForeign: number;
  stateConfirmedCasesIndian: number;
  stateDeath: number;
  stateDischarged: number;
  stateTotalConfirmed: number;
  stateActive: number;
  stateName: string;
  coronoimage: string = "assets/Images/corono.jpg";
  covid1image:string="assets/Images/covid1.png";
  covid2image:string="assets/Images/covid2.png";
  covid3image:string="assets/Images/covid3.png";
  covid4image:string="assets/Images/covid4.png";
  covid5image:string="assets/Images/covid5.png";
  covid6image:string="assets/Images/covid6.png";
  covid7image:string="assets/Images/covid7.png";
  covid8image:string="assets/Images/covid8.png";

//#endregion

//#region Constructor
  constructor(private dataservice: DataServiceService, private stateDistrictService: StateDistrictService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.stateName = "Andaman and Nicobar Islands";
  }

  //#endregion
 
 //#region Method

  ngOnInit(): void {

    this.dataservice.getDistrictData().subscribe((result) => {
      this.districtData.push(result);
      console.log(this.districtData);
    })

    this.dataservice.getIndiaData().subscribe((result) => {
      this.regionaldata.push(result.data.regional);
      this.totalcase = result["data"]["unofficial-summary"][0].total;
      this.death = result["data"]["unofficial-summary"][0].deaths;
      this.activeCase = result["data"]["unofficial-summary"][0].active;
      this.discharged = result["data"]["unofficial-summary"][0].recovered;

      this.unidentified = result.data.summary.confirmedButLocationUnidentified;
      this.Foreigntotalcase = result.data.summary.confirmedCasesForeign;
      this.Indiatotalcase = result.data.summary.confirmedCasesIndian;
      this.pieChartCountryData = [this.activeCase, this.discharged, this.death, this.unidentified]
      this.barChartCountryData = [{ data: [this.activeCase, this.discharged, this.death, this.unidentified], label: "Covid 19 India Tracker" }]

      this.updateValue(this.stateName);
      this.updateChartValue("confirmed");

      //this.ChartData.push(new chartsFields("Active", this.activeCase));
      //this.ChartData.push(new chartsFields("Recover", this.discharged));
      //this.ChartData.push(new chartsFields("Death", this.death));
      //this.ChartData.push(new chartsFields("UnIdentified", this.unidentified));


    }
    )
  }
  updateChartValue(value) {
    let districtData = this.stateDistrictService.getdistrictData(this.districtData[0][this.stateName]["districtData"], this.stateName, value);
    let labels: any[] = [];
    let districtValue: any[] = [];
    for (let i = 0; i < districtData.length; i++) {
      labels.push(districtData[i].districtName);
      districtValue.push(districtData[i].value);
    }
    this.barChartLabels = labels;
    this.barChartData = [{ data: districtValue, label: 'Corono ' + value + ' case ' }];
    let selectColor;
    switch (value) {
      case "confirmed":
        selectColor = "#8cc8f3";
        break;
      case "active":
        selectColor = "#ffe29d";
        break;
      case "recovered":
        selectColor = "LightGreen";
        break;
      default:
        selectColor = "#ff90a5";
        break;
    }

    this.barChartColors = [{ backgroundColor: selectColor }]
  }

  updateValue(selectedState: string) {
    this.stateName = selectedState;

    for (let i = 0; i < this.regionaldata[0].length; i++) {
      if (selectedState == this.regionaldata[0][i].loc) {
        let data = this.regionaldata[0][i] as (regionalData);
        this.stateConfirmedCasesForeign = data.confirmedCasesForeign;
        this.stateConfirmedCasesIndian = data.confirmedCasesIndian;
        this.stateDeath = data.deaths;
        this.stateDischarged = data.discharged;
        this.stateTotalConfirmed = data.totalConfirmed;
        this.stateActive = this.stateTotalConfirmed - this.stateDeath - this.stateDischarged;
        this.pieChartStateData = [this.stateActive, this.stateDischarged, this.stateDeath];
        this.pieChartStateLabels = [["active"], ["recovered"], ["death"]];
        break;
      }
    }
    this.updateChartValue("confirmed");
  }
//#endregion

  //#region PieChart State
  public pieChartStateOptions: ChartOptions = { responsive: true };
  public pieChartStateLabels: Label[] = [["active"], ["recovered"], ["death"]];
  public pieChartStateData: SingleDataSet = [0, 0, 0];
  public pieChartStateType: ChartType = 'pie';
  //#endregion

  //#region PieChart Country

  public pieChartCountryOptions: ChartOptions = { responsive: true };
  public pieChartCountryLabels: Label[] = [["active"], ["recovered"], ["death"], "unidentified"];
  public pieChartCountryData: SingleDataSet = [0, 0, 0, 0];
  public pieChartCountryType: ChartType = 'pie';
  //#endregion

  //#region Barchart District

  public barChartOptions: ChartOptions = { responsive: true, };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  barChartData: ChartDataSets[] = [{ data: [], label: '' }];

  public barChartColors: Color[] = [
    { backgroundColor: '' }
  ]

  //#endregion

  //#region Bar Chart Country
  public barChartCountryOptions: ChartOptions = { responsive: true, };
  public barChartCountryLabels: Label[] = [["active"], ["recovered"], ["death"], "unidentified"];
  public barChartCountryType: ChartType = 'bar';
  public barChartCountryLegend = true;
  public barChartCountryPlugins = [];

  barChartCountryData: ChartDataSets[] = [{ data: [], label: '' }];

  //#endregion
}
