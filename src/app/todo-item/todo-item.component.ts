import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  faCheck = faCheck;
  faPen = faPen;
  faTrash = faTrash;

  @Input() todo: Todo;
  @Output() editClick: EventEmitter<void> = new EventEmitter();
  @Output() deleteClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEditClick(event: Event) {
    event.stopPropagation();
    this.editClick.emit();
  }

  onDeleteClick(event: Event) {
    event.stopPropagation();
    this.deleteClick.emit();
  }
}
