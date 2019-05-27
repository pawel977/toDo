import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../services/to-do.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  doneTasks;
  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.doneTasks = this.toDoService.getDoneTask();
  }

}
