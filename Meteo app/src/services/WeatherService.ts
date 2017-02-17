import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

  private _appid = '16781c839811106788cd4b5f95dbde27';

  constructor(private http: Http) { }

  public getWeather(url: string, city: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/${url}${city}&mode=json&units=metric&APPID=${this._appid}`)
      .map(hours => hours.json());
  }
}
