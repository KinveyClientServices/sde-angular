import { Routes } from "@angular/router";
import { LoggedInGuard } from "./logged-in.guard";
import { AnonGuard } from "./anon.guard";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { FilesComponent } from "./files/files.component";
import { SettingsComponent } from "./settings/settings.component";
import { TasksComponent } from "./tasks/tasks.component";
import { OfflineComponent } from "./offline/offline.component";
import { MapComponent } from "./map/map.component";
import { ChatComponent } from "./chat/chat.component";
import { ArComponent } from "./ar/ar.component";
import { LoginComponent } from "./login/login.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { FileDetailsComponent } from "./files/file-details/file-details.component";
import { LayoutComponent } from "./layout/layout.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";

export const routes: Routes = [
  {
    path: "",
    canActivate: [LoggedInGuard],
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "products", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: "products/product-details", component: ProductDetailsComponent },

      { path: "files", component: FilesComponent },
      { path: "files/details", component: FileDetailsComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tasks", component: TasksComponent },
      { path: "tasks/add-task", component: AddTaskComponent },
      { path: "offline", component: OfflineComponent },
      { path: "map", component: MapComponent },
      { path: "chat", component: ChatComponent },
      { path: "ar", component: ArComponent }
    ]
  },
  { path: "login", component: LoginComponent, canActivate: [AnonGuard] }
]; //{ path: "", redirectTo: "products", pathMatch: "full" },
