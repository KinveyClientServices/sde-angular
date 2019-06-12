export class Config {
  //KINVEY
  static appKey: string = "kid_B1x00rhRV";
  static appSecret: string = "40313900b83c48aba217db6e33406493";

  //LOGIN
  static appLogo: string = "images/cn-logo.png";
  static appTitle: string = "CN Rail";

  //HOME
  static homePageTitle: string = "CN Rail";
  static logo: string = "~/app/images/cn-logo.png";
  static homePageVisible: boolean = true;
  static homePageHeading: string = "Canadian National Railway";

  //ACCOUNTS
  static accountsPageTitle: string = "Accounts";
  static accountsCollectionName: string = "accounts";
  static accountsPageVisible: boolean = false;

  //PRODUCTS
  static productsPageTitle: string = "Products";
  static productsCollectionName = "products";
  static productsPageVisible: boolean = false;
  //FILES
  static filesPageTitle: string = "Learning Materials";
  static filesPageVisible: boolean = false;

  //TASKS
  static tasksPageTitle: string = "Shipment Details";
  static taskCollectionName: string = "tracking";
  static tasksPageVisible: boolean = true;

  //ADD TASKS
  static addTaskPageTitle: string = "Get Stuff";

  //OFFLINE
  static offlinePageTitle: string = "Shipments";
  static offlineAccountsCollectionName: any = "shipments";
  static offlinePageVisible: boolean = true;

  //MAP
  static mapPageTitle: string = "Map";
  static mapPageVisible: boolean = true;

  //CHAT
  static chatPageTitle: string = "Chat";
  static botId: string = "5aec90c92f0cb34333a804a7";
  static channelId: string = "7a530423-7e17-4b37-8c46-03a910241065";
  static channelToken: string = "0597259e-ad2c-4563-a92d-1c4d9a6cd33c";
  static chatPageVisible: boolean = false;

  //AR
  static arPageTitle: string = "Augment Reality";
  static arPageVisible: boolean = false;

  //SETTINGS
  static settingsPageTitle: string = "Settings";
  static chatConfig: any = {
    botId: "5c993e6c49ecf64c7f053b11",
    channelId: "4db24498-d303-4a7f-a48a-b9579d5c0fcc",
    channelToken: "49ed1630-53ef-4bdf-a98d-160a0a4853d7"
  };
}
