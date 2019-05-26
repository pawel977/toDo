import {EventEmitter, Injectable} from '@angular/core';
import {Task} from '../mainView/to-do-list/to-do-item/task.model';

@Injectable()
export class ToDoService {
  taskSelected = new EventEmitter<Task>();
  private tasks: Task[] = [
    new Task(
      'task1',
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

  constructor() {
  }

  getTask(index: number) {
  return this.tasks[index];
  }

  getTasks() {
    return this.tasks;
  }
}
