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
    this._httpService.getAuthors().subscribe(data => {
      console.log("Retrieving all the authors.. ", data)
      this.authors = data["authors"]
    })
  }

  deleteAuthor(author) {
    this._httpService.deleteAuthor(author).subscribe(data => {
      console.log("Deleting an author.. ", data)
      this.getAuthors()
    })
  }
}
