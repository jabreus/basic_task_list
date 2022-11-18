import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzInputModule } from 'ng-zorro-antd/input';

import { IconDefinition } from '@ant-design/icons-angular';
import { PlusOutline, UserOutline, ArrowsAltOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

const icons: IconDefinition[] = [PlusOutline, UserOutline, ArrowsAltOutline];

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
    NzIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
