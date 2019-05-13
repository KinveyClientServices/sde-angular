import { Injectable } from "@angular/core";
import {
  UserService,
  FilesService,
  DataStoreService,
  DataStoreType,
  Query
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
    this.user = new BehaviorSubject<any>(this.activeUser);
    this.username = this.user.pipe(
      map(kinveyUser => {
        if (kinveyUser) {
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
  getFilesCount(): any {
    return 3;
  }
  getPendingCount(): any {
    return this.accountsStore.pendingSyncCount();
  }
  getCount() {
    return this.accountsStore.count();
  }

  private myDataStore = this.datastoreService.collection(
    Config.productsCollectionName
  );
  private tasksStore = this.datastoreService.collection(
    Config.taskCollectionName
  );
  private offlineAccountsStore = this.datastoreService.collection(
    Config.offlineAccountsCollectionName,
    DataStoreType.Sync
  );
  private accountsStore = this.datastoreService.collection(
    Config.accountsCollectionName
  );
  public selectedFile: any;
  public isLoggedIn: BehaviorSubject<boolean>;
  private user: BehaviorSubject<any>;
  public username: Observable<string>;

  getTasks() {
    return this.tasksStore.find();
  }
  async pullAccountData() {
    let num = await this.offlineAccountsStore.pendingSyncCount();
    console.log(num);
    if (<any>num === 0) {
      //THIS IS A BUG IN THE d.ts
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

  getFiles(): Promise<any[]> {
    var q = new Query();
    q.equalTo("mimeType", "application/pdf");
    return this.filesService.find(q);
  }

  getItems() {
    return this.myDataStore.find();
  }

  login(name, password): Promise<any> {
    console.log("login in");
    if (this.userService.getActiveUser()) {
      console.log("already logzgesd in");
      return Promise.resolve(this.userService.getActiveUser());
    } else {
      console.log("nsot yet");
      return this.userService.login(name, password).then(user => {
        console.log("we bsack");
        this.isLoggedIn.next(true);
        //console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }

  loginWithMIC(redirectUri: string): Promise<any> {
    if (this.userService.getActiveUser()) {
      return Promise.resolve(this.userService.getActiveUser());
    } else {
      return this.userService.loginWithMIC(redirectUri, "test").then(user => {
        console.log("we bassck");
        this.isLoggedIn.next(true);
        //console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }
  logout(): Promise<void> {
    return this.userService.logout().then(() => {
      this.isLoggedIn.next(false);
      this.user.next(null);
    });
  }
}
