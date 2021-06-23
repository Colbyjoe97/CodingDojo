import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  cityInfo = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }

  getWeather() {
    const observable = this._httpService.getWeather("dallas")
    observable.subscribe(data => {
      console.log("Getting weather.. ", data)
      this.cityInfo = data
      console.log("CITY INFO", this.cityInfo)
    })
  }
}
