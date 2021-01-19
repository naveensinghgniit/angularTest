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

  // Class and ngClass binding
  textSuccess = 'text-success';
  hasError = true;
  isSpecial = true;
  messageClasses = {
    'text-success': !this.hasError,
    'text-warning': this.hasError,
    'text-special': this.isSpecial
  };

  // style binding
  highlightColor = 'pink';
  titleStyles = {
    textTransform: 'uppercase',
    color: 'purple'
  };

  greetUser() {
    return 'Welcome to angular project ' + this.fullName;
  }
}
