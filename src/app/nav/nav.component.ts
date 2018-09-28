import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    NewAppComponent: AppComponent = new AppComponent();
}
