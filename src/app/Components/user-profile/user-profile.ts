import { Component } from '@angular/core';
import { ProfilePhoto } from "../profile-photo/profile-photo";
import { UserBiography } from "../user-biography/user-biography";

@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto, UserBiography],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

}
