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
  constructor(private router: Router, public globalVar: GlobvarService) {
    this.semuanote = globalVar.getAll();
  }
  satu: Datanote;
  semuanote: Array<Datanote>;
  judul: String = "";
  isi: String = "";
  tanggal: String = "";
  inputNote() {
    alert(this.judul);
    // this.satu.judul = this.judul;
    // this.satu.isi = this.isi;
    // this.satu.tanggal = this.tanggal;
    this.globalVar.setIsiNote(this.judul, this.isi, this.tanggal);
    this.semuanote = this.globalVar.getAll();
  }
  showNote() {
    this.router.navigate(["/detail"]);
  }
  detail(a) {
    this.router.navigate(["/detail/" + a]);
  }
  ngOnInit() {}
}
