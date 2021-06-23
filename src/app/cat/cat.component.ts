import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cat } from '../models/cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {

  httpOk: boolean;
  cat!: Cat;

  constructor(private catApi: CatService) { }

  ngOnInit() {
    this.catApi.getCat().subscribe((resp: HttpResponse<Cat[]>)=>{
      console.log(resp);
      this.httpOk = resp.ok;
      this.cat = resp.body[0];
    });
  }

  refreshCat(){
    console.log('un autre !');
    this.catApi.getCat().subscribe((resp: HttpResponse<Cat[]>)=>{
      console.log(resp);
      this.httpOk = resp.ok;
      this.cat = resp.body[0];
    });
  }

}
