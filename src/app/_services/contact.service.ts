import { Injectable } from "@angular/core";
declare var ContactPlugin;

@Injectable()
export class ContactService {
  public pushtoken: any;
  constructor() {}

  public initContact() {
    var fields = [
      navigator.contacts.fieldType.displayName,
      navigator.contacts.fieldType.phoneNumbers
    ];

    navigator.contacts.find(
      fields,
      function(contacts) {
        alert(contacts.length);
      },
      function(err) {
        console.log("Error: " + err);
      },
      {
        filter: "mahi",
        multiple: true
      }
    );
  }
  private getToken() {}
}
