import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet: object
  likeBtn: boolean

  constructor(private _httpService: HttpService, private router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.likeBtn = true
    this.pet = {
      pet: {
        name: "",
        type: "",
        description: "",
        skill_one: "",
        skill_two: "",
        skill_three: ""
      }
    }
    this.getPet()
  }

  getPet() {
    this._route.params.subscribe((params) => {
      console.log("Pet ID is.. ", params["id"])
      const observable = this._httpService.onePet(params["id"])
      observable.subscribe(data => {
        console.log("Pet data: ", data)
        this.pet = data
      })
    })
  }

  like(petToLike) {
    console.log(petToLike)
    this.likeBtn = false
    const observable = this._httpService.like(petToLike._id)
    observable.subscribe(data => {
      console.log("Data on pet like: ", data)
      this.getPet()
    })
  }

  adopt(petToAdopt) {
    console.log(petToAdopt)
    const observable = this._httpService.adopt(petToAdopt._id)
    observable.subscribe(data => {
      console.log("Data on delete: ", data)
      this.router.navigate(['/pets'])
    })
  }

}
