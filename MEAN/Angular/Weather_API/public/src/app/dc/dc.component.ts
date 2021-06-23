import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  cityInfo = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }

  getWeather() {
    const observable = this._httpService.getWeather("washington")
    observable.subscribe(data => {
      console.log("Getting weather.. ", data)
      this.cityInfo = data
      console.log("CITY INFO", this.cityInfo)
    })
  }

}
