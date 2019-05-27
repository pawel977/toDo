import {EventEmitter, Injectable} from '@angular/core';
import {Task} from '../mainView/to-do-list/to-do-item/task.model';

@Injectable()
export class ToDoService {
  taskSelected = new EventEmitter<Task>();
  private tasks: Task[] = [
    new Task(
      'Learn Angular',
      'asdasdasdasdasdasdas'),
    new Task(
      'title2',
      'asdasdasdasdasdasdasd'
    ),
    new Task(
      'task3',
      'dasdasdasdasdsdgsdg'
    )
  ];
  private allTasksEver() {}

  constructor() {
  }

  createTask(title, description) {
    this.tasks.push(
      new Task(title, description)
    );
  }
  deleteTask(i: number): void {
    this.tasks.splice(i, 1);
  }
  modifyTask(i, newTitle, newDescription?) {
    this.tasks[i].title = newTitle;
    this.tasks[i].description = newDescription;
  }

  getTask(index: number) {
  return this.tasks[index];
  }

  getTasks() {
    return this.tasks;
  }
}
