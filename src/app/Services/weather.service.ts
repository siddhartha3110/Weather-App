import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../Models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

getWeatherData(cityName:string): Observable<WeatherData>{
  return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
    headers:new HttpHeaders()
    .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
    .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
    params: new HttpParams()
    .set('q',cityName)
    .set('units','imperial')
    .set('mode','json')
  })

}

}

