import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CharGroupComponent } from './char-group/char-group.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './Messages/message-item/message-item.component';
import { MessageListComponent } from './Messages/message-list/message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CharGroupComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
