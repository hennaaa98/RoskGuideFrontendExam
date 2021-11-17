import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  profile = {
    full_name: '',
    email: '',
    telephone: '',
    t_location: '',
    p_location: '',
    password: ''
  };
  submitted = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  saveProfile() {
    const data = {
      full_name: this.profile.full_name,
      email: this.profile.email,
      telephone: this.profile.telephone,
      t_location: this.profile.t_location,
      p_location: this.profile.p_location,
      password: this.profile.password
    };

    this.profileService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProfile() {
    this.submitted = false;
    this.profile = {
      full_name: '',
      email: '',
      telephone: '',
      t_location: '',
      p_location: '',
      password: ''
    };
  }
}
