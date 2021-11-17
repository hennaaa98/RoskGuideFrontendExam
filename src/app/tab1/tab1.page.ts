import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  favorites: any;

  full_name: string = "Sofia";

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router) {}
  
}