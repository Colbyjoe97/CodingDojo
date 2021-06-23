import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/api/authors')
  }

  oneAuthor(id: string) {
    return this._http.get(`/api/author/${id}`)
  }

  createAuthor(newAuthor) {
    return this._http.post('/api/new/author', newAuthor)
  }

  deleteAuthor(author) {
    return this._http.delete(`/api/delete/${author._id}`)
  }

  editAuthor(id: string, name: object) {
    return this._http.put(`/api/update/${id}`, name)
  }

  addQuote(newQuote, author) {
    return this._http.post(`/api/new/quote/${author._id}`, newQuote)
  }

  upvote(authId, id: string) {
    return this._http.put(`/api/upvote/${authId}/${id}`, {id: id , authId: authId })
  }

  downvote(authId, id: string) {
    return this._http.put(`/api/downvote/${authId}/${id}`, {id: id , authId: authId })
  }

  // deleteQuote(authId, id: string) {
  //   return this._http.delete(`/api/delete/quote/${authId}/${id}`)
  // }
  deleteQuote(id){
    return this._http.delete('/quotes/'+id);
  }
}