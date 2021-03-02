import { Injectable } from "@angular/core";
import { Datanote } from "./datanote";

@Injectable()
export class GlobvarService {
  private isiNote: [Datanote];

  //private isiNote = [{ judul: String, isi: String, tanggal: String }];
  isiAll: Datanote;
  constructor() {}

  public getAll() {
    return this.isiNote;
  }
  public setIsiNote(judul, isi, tanggal) {
    this.isiAll.judul = judul;
    this.isiAll.isi = isi;
    this.isiAll.tanggal = tanggal;
    this.isiNote.push(this.isiAll);
  }
}
