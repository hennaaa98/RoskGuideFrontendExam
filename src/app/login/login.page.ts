import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
  loginFailed: boolean = false;

  getLogin() {
    const data = {
      email: this.profile.email,
      password: this.profile.password
    };
  }

  constructor(private http: HttpClient, profileService: ProfileService, private router: Router) { }

  Login(){
    return this.http.get(baseUrl + '/login?email=' + this.email + '&password=' + this.password)
    .subscribe((res:any) => { 

      if(res != null){
        this.router.navigate(['/tabs/homepage']);
      } else {
        this.loginFailed = true;
      }
    });
  }

  

  

  ngOnInit() {

  }
}
