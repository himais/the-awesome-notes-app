import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { NoteModel } from "src/app/models/note.model";
import { FormControl, FormGroup } from "@angular/forms";
import { NoteService } from "src/app/services/note/note.service";
import { Subscription } from "rxjs";

@Component({
  selector: "note-item",
  templateUrl: "./note-item.component.html",
  styleUrls: ["./note-item.component.css"]
})
export class NoteItemComponent implements OnInit, OnDestroy {
  @Input() note: NoteModel;
  public form: FormGroup;
  public valueChanges: Subscription;

  constructor(protected noteService: NoteService) {}

  ngOnInit() {
    this.form = this.createFormGroup();
    this.valueChanges = this.listenToFormChanges();
  }

  ngOnDestroy() {
    this.valueChanges.unsubscribe();
  }

  /**
   * Create a new formGroup
   *
   * @returns {FormGroup}
   * @memberof NoteItemComponent
   */
  public createFormGroup(): FormGroup {
    return new FormGroup({
      note: new FormControl(this.note.text || null)
    });
  }

  /**
   * Listen to form changes to update note values
   *
   * @returns {Subscription}
   * @memberof NoteItemComponent
   */
  public listenToFormChanges(): Subscription {
    return this.form.valueChanges.subscribe(value => {
      this.noteService.edit(this.note.id, value.note);
    });
  }

  /**
   * Handle click to delete note
   *
   * @memberof NoteItemComponent
   */
  public handleDeleteButtonClick() {
    this.noteService.delete(this.note.id);
  }
}
