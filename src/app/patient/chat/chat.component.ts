import { Component, OnInit } from "@angular/core";
import { Config } from "../../config";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  nativeChatConfig: any;
  title: string;
  constructor() {}

  ngOnInit() {
    this.title = Config.chatPageTitle;
    this.nativeChatConfig = {
      ...Config.chatConfig,
      session: {
        clear: true,
        userMessage: "Hello"
      }
    };
  }
  onDrawerButtonTap(): void {}
}
