import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newAuthor: any;
  authors = []
  error: string;

  constructor(private _httpService: HttpService, private router:Router) { }

  ngOnInit() {
    this.newAuthor = {
      name: ""
    }
  }

  submitAuthor() {
    this._httpService.createAuthor(this.newAuthor).subscribe((data: any) => {
      if(data.errors) {
        console.log(data.errors)
        this.error = data.errors.name.message
      }
      else {
        this.router.navigate(['/'])
      }
    })

  }

}
