import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
  
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  full_name = "Sean";


  constructor() {}
  
  ngOnInit(){ 

  } 

  spin(){
    var x = 1024; //min value
    var y = 9999; // max value

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
      element.classList.add('animate');
    }, 5000); // 5 seconds

  }
}