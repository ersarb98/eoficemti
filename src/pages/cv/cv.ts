import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AnimationService, AnimationBuilder } from 'css-animator';

/**
 * Generated class for the CvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cv',
  templateUrl: 'cv.html',
})
export class CvPage {
  @ViewChild('assignmentAnim') assignmentAnim;
  // public animator: AnimationBuilder;

  showAssigment:Boolean = false;
  showPerform:Boolean = false;
  showEducation:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CvPage');
  }

  toggleAssigment() {
    
    if (this.showAssigment == true) {
      this.showAssigment = false;
    } else {
      this.showAssigment = true;
      // this.animator.setType('fadeInLeft').show(this.assignmentAnim.nativeElement);    
    }
    
  }

  togglePerform() {
    this.showPerform = !this.showPerform;
    
    
  }

  toggleEducation() {
    this.showEducation = !this.showEducation;
    
  }

}
