declare var NativeChat: any;

export class ChatHelper {
  public static show() {
    var settings = {
      bot: {
        id: "5a6f258d7eef5c4ecfb128fc"
      },
      channel: {
        id: "2d280b2e-a0d6-4231-9602-0dbb38d2fa46",
        token: "46d2e012-32d4-4e32-95c1-c7e2d889579a"
      }
    };
    console.log("show");
    NativeChat.load({
      id: "mychatId",
      origin: "",
      display: {
        mode: "modal"
      },
      chat: settings
    });
  }

  public static hide() {}
}
