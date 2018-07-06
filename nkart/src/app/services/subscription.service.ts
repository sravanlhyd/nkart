import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubscriptionService {
  loginStatus: Subject<any> = new Subject<any>();
  constructor() { }

  //publishing the user status.
  publishLogin(status: String) {
    this.loginStatus.next(status);
  }

  //Send notification to the topnavbar abnout the user status
  captureLoginStatus() {
    return this.loginStatus.asObservable();
  }
}
