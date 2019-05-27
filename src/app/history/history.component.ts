import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../services/to-do.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  allTask = [];
  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.allTask = this.toDoService.getAllTasksEver();
  }

}
