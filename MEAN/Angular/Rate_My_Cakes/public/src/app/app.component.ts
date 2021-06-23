import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  cakes = []
  newCake: any;
  newRating = { rating: "", comment: ""};
  cakeToShow;
  avg;

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getCakes()
    this.newCake = {
      baker: "",
      image: ""
    }
  }

  getCakes() {
    const observable = this._httpService.getCakes()
    observable.subscribe((data: any) => {
      console.log("Retrieving all the cakes..", data)
      this.cakes = data
      console.log("CAKES: ", this.cakes)
    })
  }

  oneCake(idx) {
    var sum = 0;
    this.cakeToShow = this.cakes[idx]
    console.log(this.cakeToShow)
    for(let i = 0; i < this.cakeToShow.reactions.length; i++) {
      sum += this.cakeToShow.reactions[i].rating
    }
    this.avg = sum / this.cakeToShow.reactions.length
    // console.log(this.cakeToShow.reactions)
    // console.log("RATING", this.cakeToShow.reactions[1].rating)
  }

  submitCake() {
    const observable = this._httpService.createCake(this.newCake)
    observable.subscribe(data => {
      console.log("A new cake has been submitted!", data)
      this.newCake = {baker: "", image: ""}
      this.getCakes()
    })
  }

  deleteCake(cake) {
    const observable = this._httpService.deleteCake(cake)
    observable.subscribe(data => {
      console.log("Data on deletion: ", data)
      this.getCakes()
    })
  }
  // newRating = { rating: "", comment: ""};
  rate(cake) {
    console.log(cake)
    console.log(this.newRating)
    const observable = this._httpService.rate(this.newRating, cake)
    observable.subscribe(data => {
      console.log("Made a comment!", data)
    })
    this.newRating = { rating: "", comment: ""}
    this.getCakes()
  }
}
