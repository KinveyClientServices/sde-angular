export class Config {
  //KINVEY
  static appKey: string = "kid_SJ-AQ3-er";
  static appSecret: string = "23428150cb364c0585b07e0555ec1d47";

  //LOGIN
  static appLogo: string = "images/logo.png";
  static appTitle: string = "Coast Capital";

  //HOME
  static homePageTitle: string = "Coast Capital";
  static logo: string = "~/app/images/logo.png";
  static homePageVisible: boolean = true;
  static homePageHeading: string = "";

  //ACCOUNTS
  static accountsPageTitle: string = "Make Parking Spot Available";
  static accountsCollectionName: string = "accounts";
  static accountsPageVisible: boolean = false;

  //PRODUCTS
  static productsPageTitle: string = "Products";
  static productsCollectionName = "parkingSpotsCheck";
  static productsPageVisible: boolean = false;
  //FILES
  static filesPageTitle: string = "Learning Materials";
  static filesPageVisible: boolean = false;

  //TASKS
  static tasksPageTitle: string = "Available Spots";
  static taskCollectionName: string = "availableSpots";
  static tasksPageVisible: boolean = true;

  //ADD TASKS
  static addTaskPageTitle: string = "Request Parking Spot";

  //OFFLINE
  static offlinePageTitle: string = "Offline";
  static offlineAccountsCollectionName: any = "accounts";
  static offlinePageVisible: boolean = false;

  //MAP
  static mapPageTitle: string = "Map";
  static mapPageVisible: boolean = false;

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
