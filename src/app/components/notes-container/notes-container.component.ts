import { Component, OnInit } from "@angular/core";
import { NoteService } from "src/app/services/note/note.service";

@Component({
  selector: "notes-container",
  templateUrl: "./notes-container.component.html",
  styleUrls: ["./notes-container.component.css"]
})
export class NotesContainerComponent {
  constructor(protected noteService: NoteService) {}

  /**
   * Returns true if list has at least one note to display
   *
   * @returns {boolean}
   * @memberof NotesContainerComponent
   */
  public shouldShowNotes(): boolean {
    return this.noteService.quantity() > 0;
  }
}
