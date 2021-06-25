import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoComponent implements OnInit {

  city: string;

  weather: any;
  constructor(private meteoService: MeteoService, private geolocation: Geolocation) { }

  ngOnInit() { }

  getWeatherByCity() {
    this.meteoService.getWeatherByCity(this.city)
      .subscribe(resp => {
        console.log(resp);
        this.weather = resp.body;
        if (resp.ok) {
          this.city = '';
        } else {
          console.log(this.weather.message);
        }
      });
  }

  async getWeatherByLocation() {
    this.geolocation.getCurrentPosition().then((geoloc: GeolocationPosition) => {
      this.meteoService.getWeatherByLocation(geoloc.coords).subscribe(
        resp => this.weather = resp
      );
    });
  }

}
