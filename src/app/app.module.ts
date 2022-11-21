import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzInputModule } from 'ng-zorro-antd/input';

import { IconDefinition } from '@ant-design/icons-angular';
import { PlusSquareOutline, UserOutline, ArrowsAltOutline, CalendarOutline, UnlockOutline, HighlightOutline, QuestionOutline, LinkOutline, MailOutline, LockOutline, CloseOutline, PlusOutline, LogoutOutline} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CreatedTaskComponent } from './components/created-task/created-task.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from "ngx-cookie-service";
import { AddTaskLessThan1230Component } from './components/add-task-less-than1230/add-task-less-than1230.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

const icons: IconDefinition[] = [PlusSquareOutline, UserOutline, ArrowsAltOutline, CalendarOutline, UnlockOutline, HighlightOutline, QuestionOutline, LinkOutline, MailOutline, LockOutline, CloseOutline, PlusOutline, LogoutOutline];

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    CreatedTaskComponent,
    LoginComponent,
    RegistrationComponent,
    AddTaskLessThan1230Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzInputModule,
    NzAvatarModule,
    NzButtonModule,
    FormsModule,
    NzGridModule,
    NzCheckboxModule,
    NzTagModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzFormModule,
    BrowserAnimationsModule,
    NzResultModule,
    NzLayoutModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
