import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets = []
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPets()
  }

  getPets() {
    const observable = this._httpService.getPets()
    observable.subscribe(data => {
      console.log("Getting all pets.. ", data)
      this.pets = data["pets"]
    })
  }

}
