import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  faPlus = faPlus;

  notes: Note[];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.noteService.notes;
  }
}
