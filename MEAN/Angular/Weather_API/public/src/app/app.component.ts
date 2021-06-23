import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  city = "Sykesville";
  info: any;

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getWeather(this.city)
  }

  getWeather(city) {
    const observable = this._httpService.getWeather(city)
    observable.subscribe(data => {
      console.log("Getting weather.. ", data)
      this.info = data
    })
  }
}
