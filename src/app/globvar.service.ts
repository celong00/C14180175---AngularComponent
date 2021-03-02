import { Injectable } from "@angular/core";

@Injectable()
class cek {
  public judul;
  public isi;
  public tanggal;
}
export class GlobvarService {
  private isiNote: [cek];

  //private isiNote = [{ judul: String, isi: String, tanggal: String }];

  constructor() {}

  public getAll() {
    return this.isiNote;
  }
  public setIsiNote(cek) {
    this.isiNote.push(cek);
  }
}
