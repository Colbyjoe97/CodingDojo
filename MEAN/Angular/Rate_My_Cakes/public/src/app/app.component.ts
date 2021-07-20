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
    this._httpService.getCakes().subscribe((data: any) => {
      console.log("Retrieving all the cakes..", data)
      this.cakes = data
      console.log("CAKES: ", this.cakes)
    })
  }

  oneCake(cake) {
    this._httpService.findCake(cake).subscribe(data => {
      this.cakeToShow = data
      console.log(data)
      var sum = 0;
      for(let i = 0; i < this.cakeToShow.reactions.length; i++) {
        sum += this.cakeToShow.reactions[i].rating
      }
      this.avg = Math.round(sum / this.cakeToShow.reactions.length)
    })
  }

  submitCake() {
    this._httpService.createCake(this.newCake).subscribe( data => {
      console.log("A new cake has been submitted!", data)
      this.newCake = {baker: "", image: ""}
      this.getCakes()
    })
  }

  deleteCake(cake) {
    this._httpService.deleteCake(cake).subscribe(data => {
      console.log("Data on deletion: ", data)
      this.getCakes()
    })
  }

  
  rate(cake) {
    console.log(cake)
    console.log(this.newRating)
    this._httpService.rate(this.newRating, cake).subscribe(data => {
      console.log("Made a rating!")
      this.newRating = { rating: "", comment: ""}
      this.oneCake(cake)
    })
  }
}
