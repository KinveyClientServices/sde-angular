declare var nativechat: any;

export class ChatHelper {
  public static show() {
    var settings = {
      bot: {
        id: "5c7940da00923e705e04e488",
        channelId: "9cda619d-5aa2-479c-9c57-d87eded08daa",
        token: "b1ea9b2f-f49d-43e6-8050-2e6c7ef0113c"
      }
    };
    console.log("show");
    nativechat.init(settings);
  }

  public static hide() {}
}
