import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailPageRoutingModule } from './mail-routing.module';

import { MailPage } from './mail.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { AccountPageModule } from '../account/account.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailPageRoutingModule,
    AccountPageModule,
    SharedDirectivesModule,
    HttpClientModule
  ],
  declarations: [MailPage]
})
export class MailPageModule {}
