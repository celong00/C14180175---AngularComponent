import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Datanote } from "../app/datanote";
import { GlobvarService } from "../app/globvar.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  constructor(private router: Router, public globalVar: GlobvarService) {
    this.semuanote = globalVar.getAllFavourite();
  }
  semuanote: Array<Datanote>;
  ngOnInit() {}
  detail(a) {
    this.router.navigate(["/detail/" + a]);
  }
}
