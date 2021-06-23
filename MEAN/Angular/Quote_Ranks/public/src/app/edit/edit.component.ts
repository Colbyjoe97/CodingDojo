import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  error: string;
  authorToEdit: any
  author: object
  errors: string


  constructor(private _httpService: HttpService, private router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthor()
    this.author = {
      author: {
        name: ""
      }}
    this.authorToEdit = {
      name: ""
    }
  }


  getAuthor() {
    this._route.params.subscribe((params) => {
      console.log("Author ID is... ", params["id"])
      const observable = this._httpService.oneAuthor(params["id"])
      observable.subscribe(data => {
        console.log("DATA: ", data)
        this.author = data
        this.authorToEdit = this.author
      })
    })
  }

  editName() {
    this._route.params.subscribe((params) => {
      const observable = this._httpService.editAuthor(params["id"], this.authorToEdit)
      observable.subscribe((data: any) => {
        if(data.errors) {
          console.log("Errors on edit: ", data.errors)
          this.errors = data.errors.name.message
        }
        else {
          this.router.navigate(['/'])
        }
      })
    })
  }

}
