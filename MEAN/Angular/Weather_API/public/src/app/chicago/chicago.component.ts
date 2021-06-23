import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  cityInfo = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }

  getWeather() {
    const observable = this._httpService.getWeather("chicago")
    observable.subscribe(data => {
      console.log("Getting weather.. ", data)
      this.cityInfo = data
      console.log("CITY INFO", this.cityInfo)
    })
  }
}
