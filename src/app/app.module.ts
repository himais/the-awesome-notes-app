import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { ClearNotesComponent } from './components/clear-notes/clear-notes.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteItemComponent,
    NewNoteComponent,
    ClearNotesComponent,
    NotesContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
