import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = `${environment.weatherURL}?appid=${environment.weatherAPIKey}&lang=fr&units=metric`;

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string){
    return this.http.get(`${URL}&q=${city}`);
  }
}
