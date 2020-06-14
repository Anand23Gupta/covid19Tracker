//import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit,ViewChild, AfterViewInit} from '@angular/core';
//import {MatPaginator} from '@angular/material/paginator';
//import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {


totalheader:string="Total Case"
newtotalheader:string="New Case";
recoverheader:string="Total Recovered";
deatheader:string="Total Death";
newrecovered:string="New Recovered Case";
newdeatheader:string="New Death Case";
activeheader:string="Active Case";



  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths:number;
  TotalDeaths:number;
  NewRecovered:number;
  TotalRecovered:number;
  ActiveCase:number;
  lastupdated:string;
  Countries:any[]=[];
  

  constructor(private dataservice: DataServiceService,private _httpClient: HttpClient) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.dataservice.getWorldData().subscribe((result)=>{
      this.NewConfirmed=result.Global.NewConfirmed;
      this.TotalConfirmed=result.Global.TotalConfirmed;
      this.NewDeaths=result.Global.NewDeaths;
      this.TotalDeaths=result.Global.TotalDeaths;
      this.NewRecovered=result.Global.NewRecovered;
      this.TotalRecovered=result.Global.TotalRecovered;
      this.ActiveCase=this.TotalConfirmed-this.TotalRecovered-this.TotalDeaths;
      this.lastupdated=result.Date;
      this.pieChartCountryData=[this.ActiveCase,this.TotalRecovered,this.TotalDeaths];
      for(var i=0;i<186;i++){
        this.Countries.push(result.Countries[i]);
      }
    });


    

  }




  public pieChartCountryOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartCountryLabels: Label[] = [["active"],["recovered"],["death"]];
  public pieChartCountryData: SingleDataSet = [0,0,0];
  public pieChartCountryType: ChartType = 'pie';



/////////////////

displayedColumns: string[] = ['Country', 'TotalConfirmed', 'NewConfirmed', 'Active Case',"TotalRecovered","NewRecovered","TotalDeaths","NewDeaths"];
//data: GithubIssue[] = [];

resultsLength = 0;
isLoadingResults = true;
isRateLimitReached = false;

//@ViewChild(MatPaginator) paginator: MatPaginator;
//@ViewChild(MatSort) sort: MatSort;


}
