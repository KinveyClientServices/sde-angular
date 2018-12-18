import { Injectable } from "@angular/core";
import { Kinvey } from "./utils";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Config } from "./config";
export interface MortgageApplication {
  _id;
  dueDate: Date;
  photo;
  name;
  total;
  status;
}

@Injectable({
  providedIn: "root"
})
export class DataService {
  applicationsStore;

  constructor() {
    Kinvey.init({
      appKey: Config.appKey,
      appSecret: Config.appSecret
    });
    this.applicationsStore = Kinvey.DataStore.collection<MortgageApplication>(
      "applications"
    );
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
  getApplications(): any {
    var query = new Kinvey.Query();
    query.descending("dueDate");
    return this.applicationsStore.find(query);
  }
  getSingleApplication(id): any {
    return this.applicationsStore.findById(id);
  }
  setApplicationStatus(mortgageApplication): any {
    return this.applicationsStore.save(mortgageApplication);
  }

  deleteItem(): any {
    return this.tasksStore.remove();
  }
  getFilesCount(): any {
    return Kinvey.Files.count();
  }
  getPendingCount(): any {
    return this.accountsStore.pendingSyncCount();
  }
  getCount(): any {
    return this.accountsStore.count();
  }

  private myDataStore = Kinvey.DataStore.collection(
    Config.productsCollectionName
  );
  private tasksStore = Kinvey.DataStore.collection(Config.taskCollectionName);
  private offlineAccountsStore = Kinvey.DataStore.collection(
    Config.offlineAccountsCollectionName,
    Kinvey.DataStoreType.Sync
  );
  private accountsStore = Kinvey.DataStore.collection(
    Config.accountsCollectionName
  );
  public selectedFile: any;
  public isLoggedIn: BehaviorSubject<boolean>;
  private user: BehaviorSubject<Kinvey.User>;
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
    var q = new Kinvey.Query();
    q.equalTo("mimeType", "application/pdf");
    return Kinvey.Files.find(q);
  }

  getItems(): any {
    return this.myDataStore.find();
  }

  login(name, password): Promise<Kinvey.User> {
    console.log("login in");
    if (Kinvey.User.getActiveUser()) {
      console.log("already logzgesd in");
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      console.log("nsot yet");
      return Kinvey.User.login(name, password).then(user => {
        console.log("we bsack");
        this.isLoggedIn.next(true);
        //console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }

  loginWithMIC(redirectUri: string): Promise<Kinvey.User> {
    if (Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.loginWithMIC(redirectUri).then(user => {
        console.log("we bassck");
        this.isLoggedIn.next(true);
        //console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }
  logout(): Promise<void> {
    return Kinvey.User.logout().then(() => {
      this.isLoggedIn.next(false);
      this.user.next(null);
    });
  }
}
