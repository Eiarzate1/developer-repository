import { RouterModule } from '@angular/router';
import { DeveloperCollection } from './developer/developer-collection';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeveloperCollection]
})
export class AppComponent {
  title = 'Developers Repository';
}
