import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  author: object
  newQuote = {
    quote: "",
    // voteCount: 0
  }

  constructor(private _httpService: HttpService, private router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthor()
    this.author = {
      author: {
        name: ""
      }}
  }

  getAuthor() {
    this._route.params.subscribe((params) => {
      console.log("Author ID is... ", params["id"])
      const observable = this._httpService.oneAuthor(params["id"])
      observable.subscribe(data => {
        console.log("DATA: ", data)
        this.author = data
      })
    })
  }

  addQuote(author) {
    console.log(author)
    console.log(this.newQuote)
    const observable = this._httpService.addQuote(this.newQuote, author)
    observable.subscribe(data => {
      console.log("Added a new quote!", data)
    })
    this.newQuote = { quote: "" }
    this.router.navigate([`/author/${author._id}`])
  }

}
