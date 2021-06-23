import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Authors';
  authors = []

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getAuthors()
  }

  getAuthors() {
    const observable = this._httpService.getAuthors()
    observable.subscribe(data => {
      console.log("Retrieving all the authors.. ", data)
      this.authors = data["authors"]
    })
  }

  deleteAuthor(author) {
    const observable = this._httpService.deleteAuthor(author)
    observable.subscribe(data => {
      console.log("Deleting an author.. ", data)
      this.getAuthors()
    })
  }
}
