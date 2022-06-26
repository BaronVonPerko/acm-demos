import { Component } from '@angular/core';

@Component({
  selector: 'acm-demos-root',
  styles: [
    `
      .container {
        height: 100vh;
      }
    `
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Dynamic Form Validator Demo</span>
    </mat-toolbar>
    <mat-sidenav-container class="container">
      <acm-demos-login></acm-demos-login>
    </mat-sidenav-container>
  `
})
export class AppComponent {
}
