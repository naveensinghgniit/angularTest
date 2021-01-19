import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  greetings = '';
  greetingType = '';

  onClick(event) {
    this.greetings = 'Welcome back to Angular Project';
    console.log (event);
    this.greetingType = event.type;
  }

  logMessage(value) {
    console.log(value);
  }
}
