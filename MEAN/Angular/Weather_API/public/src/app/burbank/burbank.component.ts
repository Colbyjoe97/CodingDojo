import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  cityInfo = {}

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather()
  }

  getWeather() {
    const observable = this._httpService.getWeather("burbank")
    observable.subscribe(data => {
      console.log("Getting weather.. ", data)
      this.cityInfo = data
      console.log("CITY INFO", this.cityInfo)
    })
  }
}
