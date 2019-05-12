import { Injectable } from '@angular/core';
import { NoteModel, NoteStatus } from 'src/app/models/note.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: NoteModel[] = [];
  public readonly KEY = 'notes';

  constructor(protected storage: StorageService) { 
    this.notes = this.storage.get(this.KEY) || [];
  }

  /**
   * Returns the complete notes list
   *
   * @returns {NoteModel[]}
   * @memberof NoteService
   */
  public getNotes(): NoteModel[]{
    return this.notes;
  }

  /**
   * Add a new blank note
   *
   * @memberof NoteService
   */
  public add(){
    this.notes.push(new NoteModel({}));

    this.storage.set(this.KEY, this.notes);
    console.log('Added: ', this.notes);
  }

  /**
   * Edit a note by given id
   *
   * @param {string} id
   * @param {string} value
   * @memberof NoteService
   */
  public edit(id: string, value: string){
    const index = this.findIndex(id);
    const currentValue = this.notes[index].text;

    if(currentValue !== value){
      this.notes[index].text = value;
      this.notes[index].status = NoteStatus.EDIT;

      
      this.storage.set(this.KEY, this.notes);    
      console.log('Edited: ', this.notes);
    }
  }

  /**
   * Delete a note by given id
   *
   * @param {string} id
   * @memberof NoteService
   */
  public delete(id: string){
    const index = this.findIndex(id);
    this.notes.splice(index, 1);

    this.storage.set(this.KEY, this.notes);
    console.log('Deleted: ', this.notes);
  }

  /**
   * Clear all data from list and LocalStorage
   *
   * @memberof NoteService
   */
  public clear(){
    this.notes.length = 0;
    this.storage.clear(this.KEY);

    console.log('Removed: ', this.notes);
  }

  /**
   * Return quantity number
   *
   * @returns {number}
   * @memberof NoteService
   */
  public quantity(): number{
    return this.notes.length;
  }

  /**
   * Find array index by given note id
   *
   * @private
   * @param {string} id
   * @returns
   * @memberof NoteService
   */
  private findIndex(id: string) {
    return this.notes.findIndex(note => note.id === id);
  }
}
