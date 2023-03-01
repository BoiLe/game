import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { LoginComponent } from './pages/login/login.component';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { GameComponent } from './pages/game/game.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { RankComponent } from './pages/rank/rank.component';



@NgModule({
  declarations: [
    PlayerComponent,
    LoginComponent,
    GameComponent,
    QuestionComponent,
    AnswerComponent,
    RankComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    CommonModule,
    TDSFormFieldModule,
    ReactiveFormsModule,
    TDSCheckBoxModule,
    TDSInputModule,
    TDSButtonModule,
    TDSAvatarModule
  ]
})
export class PlayerModule { }
