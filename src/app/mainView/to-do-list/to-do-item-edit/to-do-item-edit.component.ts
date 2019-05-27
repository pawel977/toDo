import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ToDoService} from '../../../services/to-do.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-to-do-item-edit',
  templateUrl: './to-do-item-edit.component.html',
  styleUrls: ['./to-do-item-edit.component.scss']
})
export class ToDoItemEditComponent implements OnInit {
  @ViewChild('createForm') form: NgForm;
  id: number;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private toDoService: ToDoService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }

  onSubmit() {
   this.toDoService
     .modifyTask(
       this.id,
       this.form.value.title,
       this.form.value.description
     );
  }
}
