// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module.tns";

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
import { MapView } from "nativescript-google-maps-sdk";

import { PDFView } from "nativescript-pdf-view";
import { registerElement } from "nativescript-angular";
import { RadCalendar } from "nativescript-ui-calendar"

registerElement("PDFView", () => PDFView);
registerElement("AR", () => require("nativescript-ar").AR);
registerElement("MapView", () => MapView);
registerElement("RadCalendar", () => RadCalendar);


platformNativeScriptDynamic().bootstrapModule(AppModule);
