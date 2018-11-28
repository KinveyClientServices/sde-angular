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
    return this.profilesStore.create({
      userName: "Ryan Reynolds",
      userPic:
        "https://media.licdn.com/dms/image/C5603AQHjEyDjsuPCmA/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=dVSPq22SjW_N1aLUTmYYBeyg5bApKsHUS-PenISmnmg"
    });
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
    "profiles",
    Kinvey.DataStoreType.Network
  );
  private tasksStore = Kinvey.DataStore.collection(Config.taskCollectionName);
  private messagesStore = Kinvey.DataStore.collection("messages", Kinvey.DataStoreType.Network);

  private accountsStore = Kinvey.DataStore.collection(
    Config.accountsCollectionName
  );
  public selectedFile: any;
  public isLoggedIn: BehaviorSubject<boolean>;
  private user: BehaviorSubject<Kinvey.User>;
  public username: Observable<string>;

  constructor() {
    Kinvey.init();
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

  getFiles(): Observable<any[]> {
    return this.messagesStore.find();
  }

  getItems(): Observable<any> {
    return this.myDataStore.find();
  }

  login(name, password): Promise<Kinvey.User> {
    console.log("loggin ins");
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
      return Kinvey.User.loginWithMIC().then(user => {
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
