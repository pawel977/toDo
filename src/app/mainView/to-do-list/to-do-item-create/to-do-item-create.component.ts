import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToDoService} from '../../../services/to-do.service';
import {Task} from '../to-do-item/task.model';

@Component({
  selector: 'app-to-do-item-create',
  templateUrl: './to-do-item-create.component.html',
  styleUrls: ['./to-do-item-create.component.scss']
})
export class ToDoItemCreateComponent implements OnInit {
  @ViewChild('createForm') form: NgForm;

  constructor(private toDoService: ToDoService) {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.toDoService.createTask(
      this.form.value.title,
      this.form.value.description
    );
  }
}
