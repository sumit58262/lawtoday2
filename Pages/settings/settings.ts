import { Component } from "@angular/core";
import { PopoverController, Events } from "ionic-angular";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  constructor(public popoverCtrl: PopoverController, public events: Events) {}
}
