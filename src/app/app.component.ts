import { Component, OnInit } from '@angular/core';
import { Router } from './utils';
import { DataService } from './data.service';
import { DrawerHelper } from './utils/drawer-helper';
import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _activatedUrl: string;
  // private _sideDrawerTransition: DrawerTransitionBase;
  gesturesEnabled;
  user;
  producsPageTitle: string;
  tasksPageTitle: string;
  offlinePageTitle: string;
  mapPageTitle: string;
  filesPageTitle: string;
  arPageTitle: string;
  chatPageTitle: string;
  accountsPageTitle: string;

  constructor(private service: DataService, private router: Router) {
    // Use the component constructor to inject services.
  }

  ngOnInit(): void {
    this.user = this.service.username;
    this.gesturesEnabled = this.service.isLoggedIn;
    this.producsPageTitle = Config.productsPageTitle;
    this.accountsPageTitle = Config.accountsPageTitle;

    this.tasksPageTitle = Config.tasksPageTitle;
    this.filesPageTitle = Config.filesPageTitle;
    this.mapPageTitle = Config.mapPageTitle;
    this.offlinePageTitle = Config.offlinePageTitle;
    this.mapPageTitle = Config.mapPageTitle;
    this.chatPageTitle = Config.chatPageTitle;
    this.arPageTitle = Config.arPageTitle;

    // this._activatedUrl = "/";
    // this._sideDrawerTransition = new SlideInOnTopTransition();
    // this.router.events
    //   .pipe(filter((event: any) => event instanceof NavigationEnd))
    //   .subscribe(
    //     (event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects)
    //   );
  }

  goToSettings() {
    this.router.navigate(['settings']);
    // const sideDrawer = <RadSideDrawer>app.getRootView();
    // sideDrawer.closeDrawer();
    DrawerHelper.hide();
  }

  // get sideDrawerTransition(): DrawerTransitionBase {
  //   return this._sideDrawerTransition;
  // }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url;
  }

  onNavItemTap(navItemRoute: string): void {
    this.router.navigate([navItemRoute]);
    DrawerHelper.hide();
  }
}
