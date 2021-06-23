import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: object
  petToEdit: any
  nameError: string
  typeError: string
  dupeError: string
  descriptionError: string
  pets = []
  thisName = ""

  constructor(private _httpService: HttpService, private router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.dupeError = ""
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
    this.petToEdit = {
        name: "",
        type: "",
        description: "",
        skill_one: "",
        skill_two: "",
        skill_three: ""
    }
    this.getPet()
  }

  getPets() {
    const observable = this._httpService.getPets()
    observable.subscribe(data => {
      console.log("Getting all pets.. ", data)
      this.pets = data["pets"]
    })
  }

  getPet() {
    this._route.params.subscribe((params) => {
      console.log("Pet ID is.. ", params["id"])
      const observable = this._httpService.onePet(params["id"])
      observable.subscribe(data => {
        console.log("Pet data: ", data)
        this.pet = data
        this.petToEdit = this.pet
      })
    })
  }

  editPet() {
    console.log(this.petToEdit)
      this._route.params.subscribe((params) => {
        const observable = this._httpService.edit(params["id"], this.pet)
        observable.subscribe((data: any) => {
          if(data.errors) {
            console.log("Errors on edit: ", data.errors)
            this.nameError = data.errors.name.message
            this.typeError = data.errors.type.message
            this.descriptionError = data.errors.description.message
          }
          else {
            this.router.navigate(['/pets'])
          }
        })
      })
  }
}
