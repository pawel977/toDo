import {Component, OnInit} from '@angular/core';
import {ToDoService} from '../../services/to-do.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDoList = [];
  constructor(private toDoService: ToDoService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.toDoList = this.toDoService.getTasks();
  }

}
