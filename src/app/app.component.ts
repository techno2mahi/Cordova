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
  }

  //https://www.raymondcamden.com/2014/07/09/Cordova-Plugin-update-and-new-Contacts-demo
  public onDeviceReady() {
    alert("Device Ready");
    //this.contactService.initContact();
     alert(navigator.languages) ;
     alert(navigator.contacts) ;
    // navigator.contacts.find([navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers], function(contacts) {alert(contacts.length);},function(){}, {filter: "mahi", multiple: true})
     navigator.contacts.find(["displayName","phoneNumbers"], function(contacts) {alert(contacts.length);},function(){}, {filter: "mahi", multiple: true})
     
  }
}
