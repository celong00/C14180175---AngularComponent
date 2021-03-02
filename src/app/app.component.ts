import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobvarService } from "./globvar.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, public globalVar: GlobvarService) {
    this.router.navigate(["/home"]);
  }
  name = "Angular " + VERSION.major;
}
