import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div style="text-align:center">
  <h1>
   Noise! Welcome to {{title}}!!
  </h1>
  ... Starter Files ...
  <pm-products></pm-products>
</div>
`
})
export class AppComponent {
  title = 'Acme Product Management';
}
