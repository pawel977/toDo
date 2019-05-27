import {EventEmitter, Injectable} from '@angular/core';
import {Task} from '../mainView/to-do-list/to-do-item/task.model';

@Injectable()
export class ToDoService {
  taskSelected = new EventEmitter<Task>();
  private tasks: Task[] = [
    new Task(
      'Learn Angular',
      'learn more about NG'),
    new Task(
      'What About Vue?',
      'do reaserch about Vue'
    ),
    new Task(
      'End Project',
      'asap'
    ),
    new Task(
      'go to work',
      ''
    )
  ];

  private allTasksEver() {
  }

  private doneTask: Task[] = [];

  constructor() {
  }

  addDoneTask(i) {
    this.doneTask.push(this.getTask(i));
    this.deleteTask(i);
  }

  getDoneTask() {
    return this.doneTask;
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
