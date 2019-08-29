import { Component, OnInit } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
import { DataService } from "../data.service";
import { DataStoreService, UserService } from 'kinvey-angular-sdk';
import { Router } from "../utils";
import * as Kinvey from 'kinvey-angular-sdk';

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]

})
export class HomeComponent implements OnInit {
  logo: string;
  title: string;
  heading: string;
  user;
  homeComponent;
  jobType;
  registerUserEmail;
  empID;
  empName;
  verificationCode;
  userCollection;
  fileToUpload;
  loading: boolean = true;
  constructor(
    private service: DataService,
    private userService: UserService,
    private router: Router
  ) {

    // Use the component constructor to inject providers.
  }

  get activeUser() {
    return this.userService.getActiveUser();
  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileToUpload.employee = this.userCollection._id
    this.fileToUpload.empName = this.userCollection.data.empName
    this.fileToUpload.img = "https://www.iitlearning.com/images/securityplus-logo-1.png"
    console.log("FILE: ", this.fileToUpload)
  }

  uploadFiles() {
    console.log("Upload files")
    this.loading = true;
    this.service.saveFiles(this.fileToUpload)
    .then(
      () => {
        this.router.navigate(["tasks"])
        this.loading = false
      });

  }
  
  async me() {
    try {
      console.log("this.activeUser: ", this.activeUser)
      if (this.activeUser) {
        await this.activeUser.me();
      } else {
        this.router.navigate(["login"]);
      }
      return this.activeUser;
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    console.log("Kinvey.User.getActiveUser", this.userService.getActiveUser())
    this.logo = Config.logo;
    this.title = Config.homePageTitle;
    this.heading = Config.homePageHeading;
    this.user = this.service.activeUser;
    this.homeComponent = this.service.dataStore.homeComponent;
    this.jobType = "default";
    this
    this.me().then(res => this.userCollection = res).then(() => {
      if (this.userCollection.data.empCode) {
        console.log("in IF Statement")
        this.service.dataStore.homeComponent.isRegistered = true;
      }
      this.loading = false
    })
    console.log("empCode: ", this.user.data.empCode) 

  }

  toggleIsRegistered = bool => this.service.dataStore.homeComponent.isRegistered = !bool;
  toggleIsVerified = bool => this.service.dataStore.homeComponent.isVerified = !bool;


  registerUser() {
    this.loading = true;
    Promise.resolve(this.service.activeUser)
    .then((user) => {
      //console.log("user: ", user.data._id)

      this.service.dataStore.employeeRecord._id = user.data._id;
      this.service.dataStore.employeeRecord.jobType = this.jobType;
      this.service.dataStore.employeeRecord.empName = this.empName;
      this.service.dataStore.employeeRecord.email = this.registerUserEmail;
      this.service.dataStore.employeeRecord.empID = this.empID;
      if (user) {
        return user.update({
          jobType: this.jobType,
          email: this.registerUserEmail,
          empID: this.empID
        });
      }
      return user;
    })
    .then((res) => {
      this.loading = false;
      this.userCollection = res;
      console.log("RESPONSE: ", res)
      this.service.saveAccount(this.service.dataStore.employeeRecord)
      this.toggleIsRegistered(this.service.dataStore.homeComponent.isRegistered)
    })
    .catch((error) => {
      this.loading = false;
      console.log(error)
    })

  }

  verifyUser(event: any){
    console.log("Verify User")
    const code = parseInt(event.target.verificationCode.value, 10); 
    console.log("this.userCollection.data.empCode: ", this.userCollection.data.empCode)
    console.log("CODE: ", code)
    this.loading = true;
    if(code === this.userCollection.data.empCode){
      Promise.resolve(this.service.activeUser)
      .then((user) => {
        //console.log("user: ", user.data._id)
  
        if (user) {
          return user.update({
            isVerified: true
          });
        }
        return user;
      })
      .then((res) => {
        this.userCollection = res;
        this.loading = false;
      })
    } else {
      this.loading = false;
      alert("Verification Code Incorrect")
      
    }
  }



  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
