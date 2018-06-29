import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }

  //https://www.raymondcamden.com/2014/07/09/Cordova-Plugin-update-and-new-Contacts-demo
  public onDeviceReady() {
    alert('Device Ready');
    //cls
  //  alert(navigator.contacts);
    console.log(navigator);

  var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.phoneNumbers ]
    navigator.contacts.find(fields, function(contacts){
         alert(contacts.length)
      },function(err){
        console.log('Error: ' + err);
      },
    {
      filter: "mahi", multiple: true
    });


  }

}
