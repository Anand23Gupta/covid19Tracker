import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoronoField } from '../models/IndiaDataFields/coronoDataFields';
import { WorldDataField } from '../models/WorldDataFields/worldDataField';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  private IndiaCoviddataUrl ="https://api.rootnet.in/covid19-in/stats/latest";
  private WorldCovidUrl ="https://api.covid19api.com/summary";
  private DistrictCovidDataUrl ="https://api.covid19india.org/state_district_wise.json";

  constructor(private httpclient:HttpClient) {
   }

   getIndiaData():Observable<CoronoField> {
     return this.httpclient.get<CoronoField>(this.IndiaCoviddataUrl);
   }

   getWorldData():Observable<WorldDataField> {
    return this.httpclient.get<WorldDataField>(this.WorldCovidUrl);
  }

  getDistrictData():Observable<any> {
    return this.httpclient.get<any>(this.DistrictCovidDataUrl);
  }
}
