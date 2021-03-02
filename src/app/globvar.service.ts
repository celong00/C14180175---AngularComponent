import { Injectable } from "@angular/core";
import { Datanote } from "./datanote";

@Injectable()
export class GlobvarService {
  private isiNote: Array<Datanote> = [
    { judul: "dummy", isi: "a", tanggal: "aaa", favorite: true }
  ];

  //private isiNote = [{ judul: String, isi: String, tanggal: String }];
  isiFav: Array<Datanote> = [
    { judul: "dummy", isi: "a", tanggal: "aaa", favorite: true }
  ];
  isiAll: Datanote;

  constructor() {}
  public getSpecific(carijudul) {
    for (var i = 0; i < this.isiNote.length; i++) {
      if (this.isiNote[i].judul == carijudul) {
        return this.isiNote[i];
      }
    }
  }
  public setFavourite(carijudul) {
    for (var i = 0; i < this.isiNote.length; i++) {
      if (this.isiNote[i].judul == carijudul) {
        if (this.isiNote[i].favorite == false) {
          this.isiNote[i].favorite = true;
          return true;
        } else {
          return false;
        }
      }
    }
  }
  public setUnFavourite(carijudul) {
    for (var i = 0; i < this.isiNote.length; i++) {
      if (this.isiNote[i].judul == carijudul) {
        if (this.isiNote[i].favorite == true) {
          this.isiNote[i].favorite = false;
          return true;
        } else {
          return false;
        }
      }
    }
  }
  public getAll() {
    return this.isiNote;
  }
  public getAllFavourite() {
    for (var i = 1; i < this.isiNote.length; i++) {
      if (this.isiNote[i].favorite == true) {
        this.isiFav.push(this.isiNote[i]);
      }
    }
    return this.isiFav;
  }
  public setIsiNote(judula, isia, tanggala) {
    this.isiAll = {
      judul: judula,
      isi: isia,
      tanggal: tanggala,
      favorite: false
    };
    this.isiNote.push(this.isiAll);
  }
}
