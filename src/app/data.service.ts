import { Injectable } from "@angular/core";
import { Kinvey } from "./utils";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Config } from "./config";

@Injectable({
  providedIn: "root"
})
export class DataService {

  getProfile(): Observable<any[]> {
    return this.profilesStore.find();
  }

  saveProfile(): Promise<any> {
    return this.profilesStore.create({ userName: "Ignacio A Fuentes", userPic: "https://media.licdn.com/dms/image/C4E03AQHHcqvlwtquAg/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=ykpVYTdaZNaUU3w-sW9i9VtpVc3BVxkz0DK51YFgt2c" });
  }
  deleteItem(): any {
    return this.tasksStore.remove();
  }
  getFilesCount(): any {
    return Kinvey.Files.count();
  }

  getCount(): Observable<any> {
    return this.accountsStore.count();
  }

  private myDataStore = Kinvey.DataStore.collection(
    Config.productsCollectionName
  );
  private profilesStore = Kinvey.DataStore.collection(
    "profiles", Kinvey.DataStoreType.Network
  );
  private tasksStore = Kinvey.DataStore.collection(Config.taskCollectionName);

  private accountsStore = Kinvey.DataStore.collection(
    Config.accountsCollectionName
  );
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

  getAccounts(id?: string): Observable<any> {
    if (id) {
      return this.accountsStore.findById(id);
    } else {
      return this.accountsStore.find();
    }
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
      return Kinvey.User.loginWithMIC("http://localhost:8100").then(user => {
        console.log("we back.");
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
