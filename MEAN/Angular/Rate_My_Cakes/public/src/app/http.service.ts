import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getCakes() {
    return this._http.get('/cakes')
  }

  createCake(newCake) {
    return this._http.post('/new/cake', newCake)
  }

  deleteCake(cake) {
    return this._http.delete(`/delete/${cake._id}`)
  }

  rate(newRating, cake) {
    return this._http.post(`/new/rating/${cake._id}`, newRating)
  }
}
