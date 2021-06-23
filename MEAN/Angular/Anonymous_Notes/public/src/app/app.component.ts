import { Component } from '@angular/core';
import { HttpService } from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  notes = []
  error: string
  newNote: any

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newNote = {
      note: ""
    }
    this.getNotes()
  }

  getNotes() {
    const observable = this._httpService.getNotes()
    observable.subscribe(data => {
      console.log("Retrieving all the authors.. ", data)
      this.notes = data["notes"]
    })
  }

  submitNote() {
    const observable = this._httpService.createNote(this.newNote)
    observable.subscribe((data: any) => {
      if(data.errors) {
        console.log("Errors on creation: ", data.errors)
        this.error = data.errors.note.message
      }
      else {
        console.log(data)
        this.newNote = { note: "" }
      }
    })
    this.getNotes()
  }

  deleteNote(note) {
    console.log("Deleting..", note)
    const observable = this._httpService.deleteNote(note)
    observable.subscribe(data => {
      console.log("Data on delete: ", data)
    })
    this.getNotes()
  }
}
