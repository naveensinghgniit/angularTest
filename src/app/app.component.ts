import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public displayText = true;
  public displayTemplateReference = false;

  public newStyle = {
    'text-success': this.displayTemplateReference,
    'text-warning': !this.displayTemplateReference
  };

  toggleNewStyle() {
    console.log('welcome to event binding');
    if (this.displayTemplateReference === false) {
      this.displayTemplateReference = true;
    } else {
      this.displayTemplateReference = false;
    }

    if (this.newStyle === 'text-success') {
      this.newStyle = 'text-warning';
    } else {
      this.newStyle = 'text-success';
    }
  }
}
