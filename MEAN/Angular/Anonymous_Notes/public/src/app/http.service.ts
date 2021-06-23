import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getNotes() {
    return this._http.get('/api/notes')
  }

  createNote(newNote) {
    return this._http.post('/api/new/note', newNote)
  }

  deleteNote(note) {
    return this._http.delete(`/api/delete/${note._id}`)
  }
}
