import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { weatherData } from '../Models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeatherData(cityName: string):Observable<weatherData>{
    return this.http.get<weatherData>(environment.apiBaseUrl+`${cityName}`);
     // headers: new HttpHeaders()
       // .set(environment.HeaderName, environment.HeaderValue)
       // .set(environment.APIKeyHeaderName, environment.APIKeyHeaderValue),
     // params: new HttpParams()
       // .set('q', cityName)
       // .set('units', 'metric')
       // .set('mode', 'json')
  
  }
}
