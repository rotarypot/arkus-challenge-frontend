import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private router: Router
  ) { }

  public publicdata;
  public badCredentials: boolean = false;
  private userId;

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })

  ngOnInit(): void {
    this.getUsers();
  }

  saveId(id) {
    this.userId = id;
  }

  loginUser() {
    const credentials = this.loginForm.value;
    this.UserService.loginUser(credentials).subscribe(res => {
      // save token to localstorage
      localStorage.setItem('arkus-token', res.headers.get('auth-token'));
      this.badCredentials = false;
      this.router.navigate(['user-edit', this.userId])

    },
      err => {
        this.badCredentials = true;
      })

  }

  getUsers() {
    this.UserService.getPublicData().subscribe(
      data => {
        this.publicdata = data;
      }
    )
  }
}
