import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets() {
    return this._http.get('/api/pets')
  }

  createPet(newPet) {
    return this._http.post('/api/new/pet', newPet)
  }

  onePet(id: string) {
    return this._http.get(`/api/pet/${id}`)
  }

  like(id: string) {
    return this._http.put(`/api/like/${id}`, id)
  }

  adopt(id: string) {
    return this._http.delete(`/api/delete/${id}`)
  }

  edit(id: string, pet: object) {
    return this._http.put(`/api/update/${id}`, pet)
  }
}
