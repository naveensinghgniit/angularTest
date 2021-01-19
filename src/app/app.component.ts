import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public firstName = 'Naveen';
  public lastName = 'Kumar';
  fullName = this.firstName + ' ' + this.lastName;
  myId = 'myInput';
  siteUrl = window.location.href;
  isDisabled = true;

  greetUser() {
    return 'Welcome to angular project ' + this.fullName;
  }
}
