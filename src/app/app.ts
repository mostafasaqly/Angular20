import { Component } from '@angular/core';
import { UserProfile } from "./Components/user-profile/user-profile";

@Component({
  selector: 'app-root',
  imports: [UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
