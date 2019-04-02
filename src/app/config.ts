export class Config {
  //KINVEY
  static appKey: string = "kid_HJNLlfWF4";
  static appSecret: string = "608d3936aa4748a69eb49a7d8a2fed74";

  //LOGIN
  static appLogo: string = "images/logo-r.png";
  static appTitle: string = "Asthma Tracker";

  //HOME
  static homePageTitle: string = "Asthma Tracker";
  static logo: string =
    "https://devcenter.kinvey.com/images/Progress_Kinvey_Primary.png";
  static homePageVisible: boolean = true;
  static homePageHeading: string = "We got your backend...";

  //ACCOUNTS
  static accountsPageTitle: string = "Accounts";
  static accountsCollectionName: string = "accounts";
  static accountsPageVisible: boolean = false;

  //PRODUCTS
  static productsPageTitle: string = "Store";
  static productsCollectionName = "products";
  static productsPageVisible: boolean = true;
  //FILES
  static filesPageTitle: string = "Files";
  static filesPageVisible: boolean = false;

  //TASKS
  static tasksPageTitle: string = "Attacks";
  static taskCollectionName: string = "attacks";
  static tasksPageVisible: boolean = true;

  //ADD TASKS
  static addTaskPageTitle: string = "Add Task";

  //OFFLINE
  static offlinePageTitle: string = "Offline";
  static offlineAccountsCollectionName: any = "accounts";
  static offlinePageVisible: boolean = false;

  //MAP
  static mapPageTitle: string = "Map";
  static mapPageVisible: boolean = false;

  //CHAT
  static chatPageTitle: string = "Chat";
  static chatConfig = {
    "botId": "5c993e6c49ecf64c7f053b11",
    "channelId": "4db24498-d303-4a7f-a48a-b9579d5c0fcc",
    "channelToken": "49ed1630-53ef-4bdf-a98d-160a0a4853d7"
  }
  static chatPageVisible: boolean = true;

  //AR
  static arPageTitle: string = "Augment Reality";
  static arPageVisible: boolean = false;

  //SETTINGS
  static settingsPageTitle: string = "Settings";
}
