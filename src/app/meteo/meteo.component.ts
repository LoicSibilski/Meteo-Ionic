import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoComponent implements OnInit {

  city: string;

  weather: any;
  constructor(private meteoService: MeteoService) { }

  ngOnInit() {}

  getWeatherByCity(){
    this.meteoService.getWeatherByCity(this.city).subscribe(resp=>this.weather = resp);
  }

}
