import { Injectable } from "@angular/core";
import {
  UserService,
  FilesService,
  DataStoreService,
  DataStoreType,
  Query,
  AuthorizationGrant,
  User
} from "./utils";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Config } from "./config";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(
    private userService: UserService,
    private filesService: FilesService,
    private datastoreService: DataStoreService
  ) {
    this.isLoggedIn = new BehaviorSubject<boolean>(this.activeUser != null);
  }
  get activeUser() {
    return this.userService.getActiveUser();
  }

  public isLoggedIn: BehaviorSubject<boolean>;
  async login(name, password): Promise<User> {
    console.log("login indd");
    if (this.userService.getActiveUser()) {
      console.log("already logzgesd in");
      return Promise.resolve(this.userService.getActiveUser());
    } else {
      console.log("nsot yet");
      let u: any = await this.userService.login(name, password);
      console.log("we bsack");
      this.isLoggedIn.next(true);
      //console.log(user);
      return u;
    }
  }

  loginWithMIC(redirectUri: string): Promise<User> {
    if (this.userService.getActiveUser()) {
      return Promise.resolve(this.userService.getActiveUser());
    } else {
      //this.userService.
      return this.userService
        .loginWithMIC(
          redirectUri,
          AuthorizationGrant.AuthorizationCodeLoginPage
        )
        .then(user => {
          console.log("we bassck");
          this.isLoggedIn.next(true);
          //console.log(user);

          return Promise.resolve(user);
        });
    }
  }
  async logout(): Promise<void> {
    await this.userService.logout();
    this.isLoggedIn.next(false);
  }
}
