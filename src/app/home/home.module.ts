import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HomeRoutingModule } from "~/app/home/home-routing.module";
import { HomeComponent } from "~/app/home/home.component";

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
