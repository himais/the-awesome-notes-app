import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'clear-notes',
  templateUrl: './clear-notes.component.html',
  styleUrls: ['./clear-notes.component.css']
})
export class ClearNotesComponent{

  constructor(protected noteService: NoteService) { }

  /**
   * Remove all notes
   *
   * @memberof ClearNotesComponent
   */
  public handleClearNotes(){
    this.noteService.clear();
  }

}
