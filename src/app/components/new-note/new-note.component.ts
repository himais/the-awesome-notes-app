import { Component, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent{
  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected noteService: NoteService
  ){}

  /**
   * Emit new event on add button click
   *
   * @memberof NewNoteComponent
   */
  public handleButtonClick(){
    this.noteService.add();
  }

}
