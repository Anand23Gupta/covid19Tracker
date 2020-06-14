import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountriesComponent } from './components/countries/countries.component';
import { StatesComponent } from './components/states/states.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { PiechartComponent } from './components/piechart/piechart.component';
import { BarchartComponent } from './components/barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CountriesComponent,
    StatesComponent,
    CardDashboardComponent,
    PiechartComponent,
    BarchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
