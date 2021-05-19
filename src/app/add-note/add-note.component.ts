import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  constructor(
    private noteService: NoteService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    if (!form.valid) return alert('Form is invalid');

    const note = new Note(form.value.title, form.value.content);
    this.noteService.addNote(note);
    this.router.navigate(['../'], { relativeTo: this.route });
    this.notificationService.show('Note created');
  }
}
