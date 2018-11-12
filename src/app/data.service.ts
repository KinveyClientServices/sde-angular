import { Injectable } from "@angular/core";
import { Kinvey } from "./utils";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Config } from "./config";

@Injectable({
  providedIn: "root"
})
export class DataService {
  getFollowers(): any {
    var q = new Kinvey.Query();
    q.equalTo("UserId", Kinvey.User.getActiveUser().username);
    return this.followersStore.find(q);
  }
  donate(hospitalId: any, amount: any): any {
    return this.donationsStore.save({
      HospitalId: hospitalId,
      Amount: amount
    });
  }
  toggleFollow(item: any, newValue): any {
    if (newValue) {
      console.log("deletdding");
      var q = new Kinvey.Query();
      q.equalTo("HospitalId", item._id);
      return this.followersStore.remove(q);
    } else {
      console.log("creating");
      return this.followersStore.save({ HospitalId: item._id });
    }
  }
  getPosts(id?: any): any {
    if (id) {
      var q = new Kinvey.Query();
      q.equalTo("HospitalId", id);
      return this.postsStore.find(q);
    } else {
      return this.postsStore.find();
    }
  }
  getMyFeed(): Promise<any> {
    return Kinvey.CustomEndpoint.execute("myfeed");
  }

  deleteItem(): any {
    return this.tasksStore.remove();
  }
  getFilesCount(): any {
    return Kinvey.Files.count();
  }
  getPendingCount(): Promise<{ count: number }> {
    return this.accountsStore.pendingSyncCount();
  }
  getCount(): Observable<any> {
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
  private postsStore = Kinvey.DataStore.collection("posts");
  private donationsStore = Kinvey.DataStore.collection("donations");
  private followersStore = Kinvey.DataStore.collection("followers");

  public selectedFile: any;
  public isLoggedIn: BehaviorSubject<boolean>;
  private user: BehaviorSubject<Kinvey.User>;
  public username: Observable<string>;

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

  getTasks(): Observable<any[]> {
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
  getSyncAccounts(): Observable<any[]> {
    return this.offlineAccountsStore.find();
  }
  getAccounts(id?: string): Observable<any> {
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
      return Kinvey.User.loginWithMIC(
        "http://localhost:8100",
        Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage
      ).then(user => {
        console.log("we back");
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
