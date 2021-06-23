import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet: any
  nameError: string
  typeError: string
  dupeError: string
  descriptionError: string
  pets = []

  constructor(private _httpService: HttpService, private router:Router) { }

  ngOnInit() {
    this.dupeError = ""
    this.newPet = {
      name: "",
      type: "",
      description: "",
      skill_one: "",
      skill_two: "",
      skill_three: ""
    }
    this.getPets()
  }

  getPets() {
    const observable = this._httpService.getPets()
    observable.subscribe(data => {
      console.log("Getting all pets.. ", data)
      this.pets = data["pets"]
    })
  }

  submitPet() {
    const observable = this._httpService.createPet(this.newPet)
    for(let p of this.pets) {
      if(this.newPet.name == p.name) {
        this.dupeError = "Pet name already exists!"
      }
    }
    if(this.dupeError == "") {
      observable.subscribe((data: any) => {
        console.log(data)
        if(data.errors) {
          this.nameError = data.errors.name.message
          this.typeError = data.errors.type.message
          this.descriptionError = data.errors.description.message
          console.log(data.errors)
        }
        else{
          this.router.navigate(['/pets'])
        }
      })
    }
  }

}
