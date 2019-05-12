import { Injectable } from "@angular/core";
import { NoteModel } from 'src/app/models/note.model';

@Injectable({
  providedIn: "root"
})
export class StorageService {
  /**
   * Set data in LocalStorage
   *
   * @param {string} key
   * @param {NoteModel[]} value
   * @memberof StorageService
   */
  set(key: string, value: NoteModel[]): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      console.log('Saved in LocalStorage ', localStorage.getItem(key));
    } catch (e) {
      console.error("Error to save data: ", e);
    }
  }

  /**
   * Get data from LocalStorage
   *
   * @param {string} key
   * @returns
   * @memberof StorageService
   */
  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error("Error to get data:", e);
      return null;
    }
  }

  /**
   * Clear all data from LocalStorage
   *
   * @param {string} key
   * @memberof StorageService
   */
  public clear(key: string){
    localStorage.removeItem(key);
  }
}
