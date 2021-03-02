import { Injectable } from "@angular/core";
import { Datanote } from "./datanote";

@Injectable()
export class GlobvarService {
  private isiNote: [Datanote];

  //private isiNote = [{ judul: String, isi: String, tanggal: String }];

  constructor() {}

  public getAll() {
    return this.isiNote;
  }
  public setIsiNote(all: Datanote) {
    this.isiNote.push(all);
  }
}
