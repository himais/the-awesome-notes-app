import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { NoteModel } from 'src/app/models/note.model';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnChanges {
  public notes: NoteModel[];

  constructor(protected noteService: NoteService) {}

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  ngOnChanges(change: SimpleChanges){
    console.log(change)
  }

}
