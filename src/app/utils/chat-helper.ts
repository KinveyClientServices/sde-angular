declare var NativeChat: any;

export class ChatHelper {
  public static show() {
    var settings = {
      bot: {
        id: "5d2898d17e910233ed70e030"
      },
      channel: {
        id: "a4a62bc5-35b5-47e6-8d04-77f855a9a907",
        token: "c1d0b883-254d-414e-bdad-3edb6b7fe707"
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
