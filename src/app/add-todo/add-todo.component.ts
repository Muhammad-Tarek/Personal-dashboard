import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    if (!form.valid) return alert('Form is invalid');

    const todo = new Todo(form.value.text);
    this.todoService.addTodo(todo);
    this.router.navigate(['../'], { relativeTo: this.route });
    this.notificationService.show('Todo created');
  }
}
