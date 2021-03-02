import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { GlobvarService } from "./globvar.service";
import { DetailComponent } from "../detail/detail.component";
import { FavoriteComponent } from "../favorite/favorite.component";
import { HomeComponent } from "../home/home.component";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  { path: "detail", component: DetailComponent },
  { path: "home", component: HomeComponent },
  { path: "favorite", component: FavoriteComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    DetailComponent,
    FavoriteComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [GlobvarService]
})
export class AppModule {}
