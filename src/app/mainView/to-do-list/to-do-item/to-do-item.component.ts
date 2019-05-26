import {Component, Input, OnInit} from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
  providers: []
})
export class ToDoItemComponent implements OnInit {
 @Input()
 task: Task;
 @Input()
 index: number;

  constructor() {

  }

  ngOnInit() {
  }

}
