import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab-main',
  templateUrl: 'tab-main.html'
})
export class TabMainPage {

  tab_1Root = 'Tab_1Page'
  tab_2Root = 'Tab_2Page'
  tab_3Root = 'Tab_3Page'


  constructor(public navCtrl: NavController) { }

}
