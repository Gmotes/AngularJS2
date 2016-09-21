import { Component  } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <head>
  <base href="/">
  </head>
    <h1>{{title}}</h1>
  `
})
export class AppComponent {
  title = 'Hello World';
}
