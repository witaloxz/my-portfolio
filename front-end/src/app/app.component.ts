import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
