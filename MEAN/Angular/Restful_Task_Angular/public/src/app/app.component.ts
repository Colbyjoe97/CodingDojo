import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Task';
  newTask: any;
  id = ""
  task = ""
  tasks: any
  editFormBool: boolean = false
  taskToEdit: any
  taskToView: any
  selectedTask;


  constructor(private _httpService: HttpService){}
  ngOnInit(){ // Loads right away
    this.newTask = {
      title: "",
      description: ""
    }
  }

  // Get all tasks
  getTasks() {
    this._httpService.getTasks().subscribe(data => {
      console.log("Got all tasks!", data)
      this.tasks = data
      console.log(this.task)
    })
  }

  // View a task
  oneTask(idx) {
    this.selectedTask = this.tasks[idx]
  }

  // Create New task
  onSubmit() {
    const observable = this._httpService.createTask(this.newTask)
    observable.subscribe(data => {
      console.log("Task has been created! ", data)
      this.newTask = { title: "", description: "" }
      this.getTasks()
    })
  }

  // Form to edit task
  editForm(task) {
    this.taskToEdit = {_id: task._id, title: task.title, description: task.description}
    this.editFormBool = true
  }

  // Edit a task
  onEdit() {
    const observable = this._httpService.updateTask(this.taskToEdit)
    observable.subscribe(data => {
      console.log("Data on edit: ", data)
      this.editFormBool = false
      this.getTasks()
    })
  }

  // Delete a task
  deleteTask(task) {
    const observable = this._httpService.deleteTask(task)
    observable.subscribe(data => {
      console.log("Data on task deletion: ", data)
      this.getTasks()
    })
  }
}
