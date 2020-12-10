import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: "user-edit/:id", component: UserEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
