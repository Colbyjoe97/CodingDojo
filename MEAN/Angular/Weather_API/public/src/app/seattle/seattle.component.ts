import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  cityInfo = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }

  getWeather() {
    const observable = this._httpService.getWeather("seattle")
    observable.subscribe(data => {
      console.log("Getting weather.. ", data)
      this.cityInfo = data
      console.log("CITY INFO", this.cityInfo)
    })
  }

}
