import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { MessageService } from './shared/message.service';
import { GroupService } from './shared/group.service';
import { UsersComponent } from './users/users.component';
import { ChatGroupComponent } from './chat-group/chat-group.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './Messages/message-item/message-item.component';
import { MessageListComponent } from './Messages/message-list/message-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ChatEditComponent } from './chat-group/chat-edit/chat-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ChatGroupComponent,
    ChatEditComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageListComponent,
    HomeComponent,
    LoginComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    MessageService,
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
