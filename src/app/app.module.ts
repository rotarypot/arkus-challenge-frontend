import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CommonModule } from '@angular/common';
import { CoursesService } from './services/courses/courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './_modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from '@full-fledged/alerts';
import { FilterPipe } from './filters/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule,
    AlertModule.forRoot({ maxMessages: 1, timeout: 2500, positionX: "right", positionY: "top" }),

  ],
  providers: [UserService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
