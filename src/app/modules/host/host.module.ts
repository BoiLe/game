import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { HostComponent } from './host.component';
import { GameDisplayComponent } from './pages/game-display/game-display.component';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { LoadingComponent } from './components/loading/loading.component';
import { GameComponent } from './pages/game/game.component';
import { ProcessBarComponent } from './components/process-bar/process-bar.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { RankComponent } from './pages/rank/rank.component';


@NgModule({
  declarations: [
    HostComponent,
    GameDisplayComponent,
    LoadingComponent,
    GameComponent,
    ProcessBarComponent,
    QuestionComponent,
    AnswerComponent,
    RankComponent,
  ],
  imports: [
    CommonModule,
    HostRoutingModule,
    TDSAvatarModule
  ]
})
export class HostModule { }
