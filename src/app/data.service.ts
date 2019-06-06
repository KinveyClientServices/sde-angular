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
    this.user = new BehaviorSubject<User>(this.activeUser);
    this.username = this.user.pipe(
      map(kinveyUser => {
        if (kinveyUser) {
          console.log(kinveyUser);
          if ((<any>kinveyUser.data)._socialIdentity) {
            return (<any>kinveyUser.data)._socialIdentity.kinveyAuth.id;
          } else {
            return kinveyUser.username;
          }
        } else {
          return "";
        }
      })
    );
  }
  get activeUser() {
    return this.userService.getActiveUser();
  }

  deleteItem(): any {
    return this.tasksStore.remove();
  }
  getPendingCount(): any {
    return this.accountsStore.pendingSyncCount();
  }
  getCount() {
    return this.accountsStore.count();
  }

  private myDataStore = this.datastoreService.collection(
    Config.productsCollectionName,
    DataStoreType.Auto
  );
  private tasksStore = this.datastoreService.collection(
    Config.taskCollectionName,
    DataStoreType.Auto
  );
  private offlineAccountsStore = this.datastoreService.collection(
    Config.offlineAccountsCollectionName,
    DataStoreType.Sync
  );
  private accountsStore = this.datastoreService.collection(
    Config.accountsCollectionName,
    DataStoreType.Auto
  );
  public selectedFile: any;
  public isLoggedIn: BehaviorSubject<boolean>;
  private user: BehaviorSubject<User>;
  public username: Observable<string>;

  getTasks() {
    return this.tasksStore.find();
  }
  async pullAccountData() {
    let num = await this.offlineAccountsStore.pendingSyncCount();
    console.log(num);
    if (num === 0) {
      console.log("pulling");
      return this.offlineAccountsStore.pull();
    } else Promise.resolve();
  }
  getSyncAccounts() {
    return this.offlineAccountsStore.find();
  }
  getAccounts(id?: string): any {
    if (id) {
      return this.accountsStore.findById(id);
    } else {
      return this.accountsStore.find();
    }
  }
  addSyncAccounts(accounts): any {
    return Promise.all(
      accounts.map(item => this.offlineAccountsStore.save(item))
    );
  }
  pushSyncAccountData(): any {
    return this.offlineAccountsStore.sync();
  }
  toggleTaskStatus(task): any {
    task.completed = !task.completed;
    return this.tasksStore.save(task);
  }
  saveTask(task): any {
    task.completed = false;
    return this.tasksStore.save(task);
  }

  getFiles(): Promise<any> {
    var q = new Query();
    q.equalTo("mimeType", "application/pdf");
    return this.filesService.find(q);
  }

  getItems(): any {
    return this.myDataStore.find();
  }

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
      this.user.next(u);
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
          this.user.next(user);
          return Promise.resolve(user);
        });
    }
  }
  async logout(): Promise<void> {
    await this.userService.logout();
    this.isLoggedIn.next(false);
    this.user.next(null);
  }
}
