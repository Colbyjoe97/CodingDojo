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
  task = ""
  tasks: any
  editFormBool: boolean = false
  taskToEdit: any
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
  oneTask(task) {
    // this.selectedTask = task
    this._httpService.oneTask(task).subscribe(data => {
      console.log("Data for one task: ", data)
      this.selectedTask = data[0]
    })
  }

  // Create New task
  onSubmit() {
    this._httpService.createTask(this.newTask).subscribe(data => {
      console.log("Task created!", data)
      this.newTask = {title: "", description: ""}
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
    this._httpService.updateTask(this.taskToEdit).subscribe( data => {
      console.log("Data on edit: ", data)
      this.editFormBool = false
      this.getTasks()
    })
  }

  // Delete a task
  deleteTask(task) {
    this._httpService.deleteTask(task).subscribe(data => {
      console.log("Data on delete: ", data)
      this.getTasks()
    })
  }
}
