import { Component, OnInit } from '@angular/core';
declare var cordova;
declare var navigator;
// import { ContactService } from './_services/contact.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // constructor(private contactService: ContactService) {}

  ngOnInit() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('gpluslogin', this.googleLogin, false);
    document
      .getElementById('ClickMe')
      .addEventListener('click', this.showBrowser);
  }

  // https://www.raymondcamden.com/2014/07/09/Cordova-Plugin-update-and-new-Contacts-demo
  public onDeviceReady() {
    alert('Device Ready');
    // this.contactService.initContact();
    // alert(navigator.languages) ;
    // alert(navigator.contacts) ;
    // navigator.contacts.find([navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers], function(contacts) {alert(contacts.length);},function(){}, {filter: 'mahi', multiple: true})
    // navigator.contacts.find(['displayName','phoneNumbers'], function(contacts) {alert(contacts.length);},function(){}, {filter: 'mahi', multiple: true})
    // private target: anyl
  }

  public googleLogin() {
   window.plugins = window.plugins || {};
    window.plugins.googleplus.login(
      {
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '124899772216-onrb1qenmgqrs54oj1igredgno1c043j.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      },
      function (obj) {
        alert(JSON.stringify(obj)); // do something useful instead of alerting
      },
      function (msg) {
        alert('error: ' + msg);
      }
    );
  }

  public showBrowser() {
    alert('Going to open the in appp browser');
    cordova.InAppBrowser.open('http://sapient.com', '_blank', 'location=yes');
  }
}
