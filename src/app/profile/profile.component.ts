import { Component, OnInit } from '@angular/core';
import { Configuration, SocialMedia } from '../configuration';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  _profileUrl:string;
  _userName:string;
  _userJob:string;
  _userLocation:string;
  _userEmail:string;
  _userDateOfBirth:string;
  _github:string;
  _linkedin:string;
  _instagram:string;
  _twitter:string;
  _medium:string;
  _facebook:string;
  constructor() {
    this._profileUrl=Configuration.profileUrl;
    this._github=SocialMedia.github;
    this._instagram=SocialMedia.instagram;
    this._facebook=SocialMedia.facebook;
    this._twitter=SocialMedia.twitter;
    this._linkedin=SocialMedia.linkedin;
    this._medium=SocialMedia.medium;
    this._userName=Configuration.userName;
    this._userJob=Configuration.userJob;
    this._userLocation=Configuration.userLocation;
    this._userDateOfBirth=Configuration.userDateOfBirth;
    this._userEmail=Configuration.userEmail;
  }

  ngOnInit() {
    this.runScript();
  }

  runScript(){
    const $ = document.querySelector.bind(document);
    var audio= document.getElementById("audio-icon");
    audio.addEventListener("click",function(){
      const player = $("#audio-player") ;
      if(player != null){
        if(player.currentTime == 0 || player.ended)
        {
          player.currentTime = 0
          player.play();
          audio.classList.add("playing");
        }
        else if(player.paused){
          player.play();
          audio.classList.add("playing");
        }
        else if(player.currentTime > 0){
          player.pause();
          audio.classList.remove("playing");
        }
      }
    });
  }
}
