import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080/api/rosguide/';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string;
  password: string;
  profile: any;

  postLogin() {
    const data = {
      email: this.profile.email,
      password: this.profile.password
    };
  }

  constructor(private http: HttpClient, profileService: ProfileService) { }

  Login(){
    return this.http.get(baseUrl + '/login?email=' + this.email + '&password=' + this.password);
  }

  ngOnInit() {

  }
}
