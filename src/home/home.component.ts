import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Datanote } from "../app/datanote";
import { GlobvarService } from "../app/globvar.service";

// class cek {
//   public judul;
//   public isi;
//   public tanggal;
// }
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    public all: Datanote,
    private router: Router,
    public globalVar: GlobvarService
  ) {
    this.semuanote = globalVar.getAll();
  }
  semuanote: [Datanote];
  judul: String = "";
  isi: String = "";
  tanggal: Date;
  inputNote() {
    alert(this.judul);
    this.all.judul = this.judul;
    this.all.isi = this.isi;
    this.all.tanggal = this.tanggal;
    this.globalVar.setIsiNote(this.all);
    this.semuanote = this.globalVar.getAll();
  }
  showNote() {
    this.router.navigate(["/detail"]);
  }
  ngOnInit() {}
}
