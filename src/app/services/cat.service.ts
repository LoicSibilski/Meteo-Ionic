import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catObs: Observable<Cat[]>;

  constructor(private http: HttpClient) { }

  getCat(): Observable<HttpResponse<Cat[]>>{
    return this.http.get<Cat[]>(environment.catUrl, {observe: 'response'});
  }

}
