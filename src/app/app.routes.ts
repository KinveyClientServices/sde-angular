import { Routes } from "@angular/router";

import { LoggedInAuthGuard, AnonAuthGuard } from "./auth-guard";

export const routes: Routes = [
  {
    path: "",
    //canActivate: [LoggedInAuthGuard],
    children: [
      { path: "", loadChildren: "../home/home.module#HomeModule" }
      // {
      //   path: "products",
      //   loadChildren: "./products/products.module#ProductsModule"
      // },
      // { path: "files", loadChildren: "./files/files.module#FilesModule" },
      // {
      //   path: "settings",
      //   loadChildren: "./settings/settings.module#SettingsModule"
      // },
      // { path: "tasks", loadChildren: "./tasks/tasks.module#TasksModule" },
      // {
      //   path: "offline",
      //   loadChildren: "./offline/offline.module#OfflineModule"
      // },
      // { path: "map", loadChildren: "./map/map.module#MapModule" },
      // { path: "chat", loadChildren: "./chat/chat.module#ChatModule" },
      // { path: "ar", loadChildren: "./ar/ar.module#ArModule" }
    ]
    //},
    // {
    //   path: "login",
    //   loadChildren: "./login/login.module#LoginModule"
    //   //canActivate: [AnonAuthGuard]
  }
]; //{ path: "", redirectTo: "products", pathMatch: "full" },
