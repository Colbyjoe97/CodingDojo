import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  author: object

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
        console.log("Author Data: ", data)
        this.author = data
      })
    })
  }

  vote(authorId, quote, num) {
    this._httpService.vote(authorId, quote._id, num+quote.voteCount).subscribe(data => {
      console.log("Voted!", data)
      this.getAuthor()
    })
  }

  deleteQuote(id){
    this._httpService.deleteQuote(id).subscribe(data=>{
      console.log("Data on delete: ", data)
      this.getAuthor();
    })
  }

}