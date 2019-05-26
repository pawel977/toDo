import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToDoService} from '../../../services/to-do.service';
import {Task} from '../to-do-item/task.model';

@Component({
  selector: 'app-to-do-item-details',
  templateUrl: './to-do-item-details.component.html',
  styleUrls: ['./to-do-item-details.component.scss']
})
export class ToDoItemDetailsComponent implements OnInit {
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

  /*onAddToShoppingList() {
    this.tod.addIngredientsToShoppingList(this.recipe.ingredients);
  }
*/
  onEditTask() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }


}
