declare var NativeChat: any;

export class ChatHelper {
  public static show() {
    var settings = {
      bot: {
        id: "5c993e6c49ecf64c7f053b11"
      },
      channel: {
        id: "a6765664-6db2-445c-9504-58d38f6523c8",
        token: "88449dad-1cdb-47c3-994d-ac5cd89c3845"
      },
      session: {
        clear: true,
        userMessage: "Hello"
      }
    };
    console.log("show");
    NativeChat.load(({
      id: "chatwidget",
      origin: "",
      display: {
        mode: "modal"
      },
      chat: settings
    }));
  }

  public static hide() { }
}
