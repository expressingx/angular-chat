import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { MessageService } from './shared/message.service';
import { GroupService } from './shared/group.service';
import { UsersComponent } from './users/users.component';
import { CharGroupComponent } from './chat-group/chat-group.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './Messages/message-item/message-item.component';
import { MessageListComponent } from './Messages/message-list/message-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CharGroupComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    MessageService,
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
