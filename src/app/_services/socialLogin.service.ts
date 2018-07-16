import { Injectable } from '@angular/core';
declare var ContactPlugin;

@Injectable()
export class SocialLoginService {
  public pushtoken: any;
  constructor() {}

  public initContact() {
    const fields = [
      'displayName',
      'phoneNumbers'
    ];
  }
  private initSocialLoginService() {}
}
