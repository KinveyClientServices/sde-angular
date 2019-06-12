import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";

import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  title;
  latitude =  45.5017;
  longitude = -73.5673;
  zoom = 8;
  minZoom = 16;
  maxZoom = 16;
  bearing = 0;
  tilt = 0;
  padding = [40, 40, 40, 40];
  mapView: MapView;

  lastCamera: String;

  constructor(
    private router: RouterExtensions
  ) {}
  

  ngOnInit() {
    this.title = Config.mapPageTitle;
    console.log("On Map screen");

  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  onMapReady(event) {
    console.log('Map Ready');

    this.mapView = event.object;

    console.log("Setting a marker...");

    var marker = new Marker();
    marker.position = Position.positionFromLatLng(45.5017, -73.5673);
    marker.title = "Your Shipment Location";
    marker.snippet = "Driver: Gregory Stein";
    marker.userData = {index: 1};
    this.mapView.addMarker(marker);
  }
  
  onCoordinateTapped(args) {
    console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
}

onMarkerEvent(args) {
    console.log("Marker Event: '" + args.eventName
        + "' triggered on: " + args.marker.title
        + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    if(args.eventName === "markerInfoWindowTapped") {
      this.router.navigate(["tasks"]);
    }
}

onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
    this.lastCamera = JSON.stringify(args.camera);
}

onCameraMove(args) {
    console.log("Camera moving: " + JSON.stringify(args.camera));
}
ß
}
