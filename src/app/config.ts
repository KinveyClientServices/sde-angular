export class Config {
  //KINVEY
  static appKey: string = "kid_SJsgc-cKV";
  static appSecret: string = "e9b25c3ea90141ac977d1e4655fe83fd";

  //LOGIN
  static appLogo: string = "images/logo-bb.png";
  static appTitle: string = " ";

  //HOME
  static homePageTitle: string = "Home";
  static logo: string =
    "https://cdn3.baptistjax.com/images/global/logos/logo-baptist-health.png";
  static homePageVisible: boolean = true;
  static homePageHeading: string = "We got your backend...";

  //ACCOUNTS
  static accountsPageTitle: string = "Accounts";
  static accountsCollectionName: string = "accounts";
  static accountsPageVisible: boolean = false;

  //PRODUCTS
  static productsPageTitle: string = "Find a Doctor";
  static productsCollectionName = "products";
  static productsPageVisible: boolean = true;
  //FILES
  static filesPageTitle: string = "Patient and Visitor Services";
  static filesPageVisible: boolean = true;

  //TASKS
  static tasksPageTitle: string = "Insurance and Billing";
  static taskCollectionName: string = "attacks";
  static tasksPageVisible: boolean = true;

  //ADD TASKS
  static addTaskPageTitle: string = "Add Task";

  //OFFLINE
  static offlinePageTitle: string = "My Chart";
  static offlineAccountsCollectionName: any = "accounts";
  static offlinePageVisible: boolean = true;

  //MAP
  static mapPageTitle: string = "Directions";
  static mapPageVisible: boolean = true;

  //CHAT
  static chatPageTitle: string = "Virtual Visits";
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
