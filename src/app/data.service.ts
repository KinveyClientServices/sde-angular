import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Kinvey, CacheStore, DataStoreType, User } from "./utils";

@Injectable()
export class DataService {
  productsStore = Kinvey.DataStore.collection("products");
  tasksStore = Kinvey.DataStore.collection("tasks");
  accountsStore = Kinvey.DataStore.collection("accounts", DataStoreType.Sync);

  selectedFile: any;
  isLoggedIn: any;
  user: any;

  constructor() {
    Kinvey.init({
      appKey: "kid_rJXgUpSvm",
      appSecret: "d4b642d14aa9466eaad256675e793af1"
    });
    this.isLoggedIn = new BehaviorSubject<boolean>(
      Kinvey.User.getActiveUser() != null
    );
    this.user = new BehaviorSubject<User>(Kinvey.User.getActiveUser());
  }

  getTasks(): any {
    return this.tasksStore.find();
  }
  async pullAccountData() {
    let num = await this.accountsStore.pendingSyncCount();
    console.log(num);
    if (<any>num === 0) {
      //THIS IS A BUG IN THE d.ts
      console.log("pulling");
      return this.accountsStore.pull();
    } else Promise.resolve();
  }
  getAccounts(): any {
    return this.accountsStore.find();
  }
  addAccounts(accounts): any {
    return Promise.all(accounts.map(item => this.accountsStore.save(item)));
  }
  pushAccountData(): any {
    return this.accountsStore.sync();
  }
  toggleTaskStatus(task): any {
    task.completed = !task.completed;
    return this.tasksStore.save(task);
  }
  saveTask(task): any {
    task.completed = false;
    return this.tasksStore.save(task);
  }

  getFiles() {
    var q = new Kinvey.Query();
    q.equalTo("mimeType", "application/pdf");
    return Kinvey.Files.find(q);
  }

  getProducts(): any {
    return this.productsStore.find();
  }

  login(name, password): Promise<User> {
    console.log("loggin in");
    if (Kinvey.User.getActiveUser()) {
      console.log("already logged in");
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      console.log("not yet");
      return Kinvey.User.login(name, password).then(user => {
        console.log("we back");
        this.isLoggedIn.next(true);
        console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }

  loginWithMIC(): Promise<User> {
    if (Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.loginWithMIC(
        "http://localhost:8100",
        Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage,
        { version: "v2" } as any
      );
    }
  }
  logout(): Promise<void> {
    return Kinvey.User.logout().then(() => {
      this.isLoggedIn.next(false);
      this.user.next(Kinvey.User.getActiveUser());
    });
  }
}
