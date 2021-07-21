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
  }

  constructor(private _httpService: HttpService, private router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthor()
    this.author = {
      name: ""
    }
  }

  getAuthor() {
    this._route.params.subscribe((params) => {
      console.log("Author ID is... ", params["id"])
      this._httpService.oneAuthor(params["id"]).subscribe(data => {
        console.log("DATA: ", data)
        this.author = data
      })
    })
  }

  addQuote(author) {
    console.log(author)
    console.log(this.newQuote)
    this._httpService.addQuote(this.newQuote, author).subscribe(data => {
      console.log("Added a new quote!", data)
      this.newQuote = { quote: "" }
      this.router.navigate([`/author/${author._id}`])
    })
  }

}
