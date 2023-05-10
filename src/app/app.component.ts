import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './Models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'weather';
  cityName:any;
  temp!: number;
  constructor(private weather:WeatherService) { 
    console.log(this.cityName);
  }
  weatherZoneData: weatherData = {
    name:'Washington,D.C',
    temp:'20',
    min_temp:'5',
    max_temp:'30',
    humidity:'20',
    wind:'40'
  }
  ngOnInit() {
    
  }
  hotWeather(){
    if(this.temp > 14 && this.temp <50){
        return true
    }
    else{
      return false;
    }
  }
  coldWeather() {
    if(this.temp < 13){
      return true;
    }
    else{
      return false;
    }
  }
  private getZoneWeatherData(city:string){
    console.log("cityname = ",city);
    this.weather.getWeatherData(city).subscribe({
      next:(response) => {
        this.weatherZoneData = response;
        console.log(this.weatherZoneData);
      }
  })
  }

  searchCity(city:any){
    console.log("cityName = ",city);
    this.getZoneWeatherData(city);
  }

  }



