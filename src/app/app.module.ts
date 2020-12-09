import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { UserService } from './services/user-service/user.service';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CommonModule } from '@angular/common';
import { CoursesService } from './services/courses.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from './_alert';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AlertModule
  ],
  providers: [UserService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
