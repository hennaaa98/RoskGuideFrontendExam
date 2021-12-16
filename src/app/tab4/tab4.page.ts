import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {

  quizzes: any;
  quiz_title: string;

  getquizzes(id: number) {
    return this.http.get('http://localhost:8080/api/rosguide/quiz?location_id='+id);
  }

  constructor( private http: HttpClient, 
              private renderer: Renderer2,
              public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal.page.scss'
    });
  
    return await modal.present();
  }

  getquiz() {
    this.getquizzes(1).subscribe((data: any) => {
      this.quizzes = data;
      console.log(this.quizzes);
      });
    }

  ngOnInit() {
    this.getquiz();
  }

  checkAnswer(option: any, event) {
    var targetEle = event.srcElement.attributes.class;
    console.log(option, targetEle);
    if (option.isCorrect) {
      this.renderer.setAttribute(event.target, 'color', 'success');
    }
    else this.renderer.setAttribute(event.target, 'color', 'danger');
  }
}
