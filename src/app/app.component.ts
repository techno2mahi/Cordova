import { Component, OnInit } from "@angular/core";
declare var cordova;
declare var navigator;
//import { ContactService } from "./_services/contact.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  //constructor(private contactService: ContactService) {}

  ngOnInit() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
    document
      .getElementById("ClickMe")
      .addEventListener("click", this.showBrowser);
  }

  //https://www.raymondcamden.com/2014/07/09/Cordova-Plugin-update-and-new-Contacts-demo
  public onDeviceReady() {
    alert("Device Ready");
    // this.contactService.initContact();
    //alert(navigator.languages) ;
    //alert(navigator.contacts) ;
    //navigator.contacts.find([navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers], function(contacts) {alert(contacts.length);},function(){}, {filter: "mahi", multiple: true})
    //navigator.contacts.find(["displayName","phoneNumbers"], function(contacts) {alert(contacts.length);},function(){}, {filter: "mahi", multiple: true})
    // private target: anyl
  }

  public showBrowser() {
    alert("Going to open the in appp browser");
    cordova.InAppBrowser.open("http://sapient.com", "_blank", "location=yes");
  }
}
