import { Injectable } from "@angular/core";
import { Kinvey } from "./utils";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Config } from "./config";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private myDataStore = Kinvey.DataStore.collection(Config.collectionName);
  private tasksStore = Kinvey.DataStore.collection("tasks");
  private accountsStore = Kinvey.DataStore.collection(
    "accounts",
    Kinvey.DataStoreType.Sync
  );
  public selectedFile: any;
  public isLoggedIn: BehaviorSubject<boolean>;
  private user: BehaviorSubject<Kinvey.User>;
  public username: Observable<string>;
  selectedProduct: any;

  constructor() {
    Kinvey.init({
      appKey: Config.appKey,
      appSecret: Config.appSecret
    });
    this.isLoggedIn = new BehaviorSubject<boolean>(
      Kinvey.User.getActiveUser() != null
    );
    this.user = new BehaviorSubject<Kinvey.User>(Kinvey.User.getActiveUser());
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

  getItems(): Observable<any> {
    return this.myDataStore.find();
  }

  login(name, password): Promise<Kinvey.User> {
    console.log("loggin in");
    if (Kinvey.User.getActiveUser()) {
      console.log("already logged in");
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      console.log("not yet");
      return Kinvey.User.login(name, password).then(user => {
        console.log("we back");
        this.isLoggedIn.next(true);
        //console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }

  loginWithMIC(): Promise<Kinvey.User> {
    if (Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.loginWithMIC("http://localhost:4200")
        .then(user => {
          console.log("we back");
          this.isLoggedIn.next(true);
          //console.log(user);
          this.user.next(user);
          return Promise.resolve(user);
        })
        .catch(() => {
          console.log("error");
          return Promise.reject(null);
        });
    }
  }
  logout(): Promise<void> {
    return Kinvey.User.logout().then(() => {
      this.isLoggedIn.next(false);
      this.user.next(null);
    });
  }
  setStatus(item: any, status: any): any {
    item.status = status;
    return this.myDataStore.update(item);
  }
}
