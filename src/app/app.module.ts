import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzInputModule } from 'ng-zorro-antd/input';

import { IconDefinition } from '@ant-design/icons-angular';
import { PlusSquareOutline, UserOutline, ArrowsAltOutline, CalendarOutline, UnlockOutline, HighlightOutline, QuestionOutline} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';

const icons: IconDefinition[] = [PlusSquareOutline, UserOutline, ArrowsAltOutline, CalendarOutline, UnlockOutline, HighlightOutline, QuestionOutline];

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzInputModule,
    NzAvatarModule,
    NzButtonModule,
    FormsModule,
    NzGridModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
