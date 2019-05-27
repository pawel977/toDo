import { Component, OnInit } from '@angular/core';
import {Task} from '../mainView/to-do-list/to-do-item/task.model';
import {ToDoService} from '../services/to-do.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  task: Task;
  id: number;

  constructor(private toDoService: ToDoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.task = this.toDoService.getTask(this.id);
        }
      );
  }


}
