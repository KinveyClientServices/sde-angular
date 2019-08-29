export class Config {
  //KINVEY
  static appKey: string = "kid_rkX0BPMZS";
  static appSecret: string = "242ff4f20f8c45fc8b727ad300fba57d";

  //LOGIN
  static appLogo: string = "images/faaLogo.png";
  static appTitle: string = "FAA CIS System";

  //HOME
  static homePageTitle: string = "Home";
  static logo: string = "assets/images/faaLogo.png"
  static homePageVisible: boolean = true;
  static homePageHeading: string = "FAA CIS System";

  //ACCOUNTS
  static accountsPageTitle: string = "Employees";
  static accountsCollectionName: string = "Employees";
  static accountsPageVisible: boolean = true;

  //PRODUCTS
  static productsPageTitle: string = "Products";
  static productsCollectionName = "products";
  static productsPageVisible: boolean = false;
  //FILES
  static filesPageTitle: string = "Files";
  static filesPageVisible: boolean = false;

  //TASKS
  static tasksPageTitle: string = "Certifications";
  static taskCollectionName: string = "approvals";
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
  static botId: string = "5d2898d17e910233ed70e030";
  static channelId: string = "a4a62bc5-35b5-47e6-8d04-77f855a9a907";
  static channelToken: string = "c1d0b883-254d-414e-bdad-3edb6b7fe707";
  static chatPageVisible: boolean = true;

  //AR
  static arPageTitle: string = "Augment Reality";
  static arPageVisible: boolean = true;

  //SETTINGS
  static settingsPageTitle: string = "Settings";
  static chatConfig: any = {
    botId: "5d2898d17e910233ed70e030",
    channelId: "a4a62bc5-35b5-47e6-8d04-77f855a9a907",
    channelToken: "c1d0b883-254d-414e-bdad-3edb6b7fe707"
  };
}
