import { SuperTabsModule } from 'ionic2-super-tabs';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab_3Page } from './tab-3';

@NgModule({
  declarations: [
    Tab_3Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab_3Page),
    SuperTabsModule
  ],
})
export class Tab_3PageModule {}
