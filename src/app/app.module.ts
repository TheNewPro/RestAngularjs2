import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewServiceService } from './users/new-service.service';
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule ,HttpModule,routing
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
