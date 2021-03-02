import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Datanote } from "../app/datanote";
import { GlobvarService } from "../app/globvar.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public globalVar: GlobvarService
  ) {}
  paramnama: string;
  detilnote: Datanote;
  tampil: boolean;
  ngOnInit() {
    let isijudul = this.route.snapshot.paramMap.get("judul");
    this.detilnote = this.globalVar.getSpecific(isijudul);
    if (this.detilnote.favorite == true) {
      this.tampil = false;
    } else {
      this.tampil = true;
    }
  }
  favNote() {
    if (this.globalVar.setFavourite(this.detilnote.judul)) {
      alert("Set To Favourite");
    } else {
      alert("Already Favourite");
    }
    if (this.detilnote.favorite == true) {
      this.tampil = false;
    } else {
      this.tampil = true;
    }
  }
  unfavNote() {
    if (this.globalVar.setUnFavourite(this.detilnote.judul)) {
      alert("Set To UnFavourite");
    } else {
      alert("Already UnFavourite");
    }
    if (this.detilnote.favorite == true) {
      this.tampil = false;
    } else {
      this.tampil = true;
    }
  }
}
