import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMainPage } from './tab-main';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    TabMainPage,
  ],
  imports: [
    IonicPageModule.forChild(TabMainPage),
    SuperTabsModule
  ]
})
export class TabMainPageModule {}
