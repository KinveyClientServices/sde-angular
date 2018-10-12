import { Injectable } from '@angular/core';
import { Kinvey } from './utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
  private accountsStore = Kinvey.DataStore.collection('products');
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
          return '';
        }
      })
    );
  }

  getTasks(): any {
    return this.tasksStore.find();
  }
  async pullAccountData() {
    const num = await this.offlineAccountsStore.pendingSyncCount();
    console.log(num);
    if (<any>num === 0) {
      // THIS IS A BUG IN THE d.ts
      console.log('pulling');
      return this.offlineAccountsStore.pull();
    } else Promise.resolve();
  }
  getSyncAccounts(): any {
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
    console.log(task.addressedby);
    task.status = 'Stable';
    task.completed = true;
    return this.tasksStore.save(task);
  }
  saveTask(): any {
    return this.tasksStore.sync();
  }

  getFiles() {
    var q = new Kinvey.Query();
    q.equalTo('mimeType', 'application/pdf');
    return Kinvey.Files.find(q);
  }

  getItems(): Observable<any> {
    return this.myDataStore.find();
  }

  login(name, password): Promise<Kinvey.User> {
    console.log('loggin in');
    if (Kinvey.User.getActiveUser()) {
      console.log('already logged in');
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      console.log('not yet');
      return Kinvey.User.login(name, password).then(user => {
        console.log('we back');
        this.isLoggedIn.next(true);
        // console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }

  loginWithMIC(): Promise<Kinvey.User> {
    if (Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.loginWithMIC('http://localhost:4200').then(user => {
        console.log('we back');
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
