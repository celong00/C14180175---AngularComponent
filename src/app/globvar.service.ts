import { Injectable } from "@angular/core";

@Injectable()
export class GlobvarService {
  private isiNote = [{ judul: String, isi: String, tanggal: String }];

  constructor() {}

  public getAll() {
    return this.isiNote;
  }
  public setIsiNote(cek) {
    this.isiNote.push(cek);
  }
}
