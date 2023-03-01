import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutAccountComponent } from './components/layout-account/layout-account.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './account.component';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSButtonModule } from 'tds-ui/button';


@NgModule({
  declarations: [
    LayoutAccountComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    TDSFormFieldModule,
    ReactiveFormsModule,
    TDSCheckBoxModule,
    TDSInputModule,
    TDSButtonModule
  ]
})
export class AccountModule { }
