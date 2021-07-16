import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getTasks() {
    return this._http.get('/tasks')
  }

  oneTask(task) {
    return this._http.get(`/task/${task._id}`)
  }

  createTask(newTask) {
    return this._http.post('/new/task', newTask)
  }

  deleteTask(task) {
    return this._http.delete(`/delete/${task._id}`)
  }

  updateTask(editedTask) {
    return this._http.put(`/update/${editedTask._id}`, editedTask)
  }
}