export class Config {
  //KINVEY
  static appKey: string = "kid_HJSfxFpFN";
  static appSecret: string = "e8fcf60652f74cb89bba2f3021674516";

  //LOGIN
  static appLogo: string = "images/logo-p.png";
  static appTitle: string = " ";

  //HOME
  static homePageTitle: string = "Home";
  static logo: string =
    "https://pathforward.us/wp-content/uploads/2018/07/pftoplogo.png";
  static homePageVisible: boolean = true;
  static homePageHeading: string = "We got your backend...";

  //ACCOUNTS
  static accountsPageTitle: string = "Accounts";
  static accountsCollectionName: string = "accounts";
  static accountsPageVisible: boolean = false;

  //PRODUCTS
  static productsPageTitle: string = "Appointments";
  static productsCollectionName = "appointments";
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
