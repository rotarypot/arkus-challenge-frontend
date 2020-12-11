import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from 'src/app/_modal';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private router: Router,
    private modal: ModalService
  ) { }

  public publicdata;
  public badCredentials: boolean = false;
  private userId;
  public showLogin: boolean = false;

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })

  ngOnInit(): void {
    this.getUsers();
    this.onChanges();

    const gotToken = localStorage.getItem('arkus-token');
    if (!gotToken) {
      this.showLogin = true
    }

  }

  saveId(id) {
    this.userId = id;
  }

  logoutUser() {
    localStorage.removeItem('arkus-token');
    this.showLogin = true;
  }

  loginLink() {

    this.modal.open('modal-1')

  }

  loginUser() {
    const credentials = this.loginForm.value;
    this.UserService.loginUser(credentials).subscribe(res => {
      // save token to localstorage
      localStorage.setItem('arkus-token', res.headers.get('auth-token'));
      this.badCredentials = false;
      if (this.userId) {
        this.router.navigate(['user-edit', this.userId])
        this.userId = null;
      }
      this.modal.close('modal-1');
      this.showLogin = false;
    },
      err => {
        this.badCredentials = true;
      })

  }

  onChanges(): void {
    this.loginForm.valueChanges.subscribe(val => {
      this.badCredentials = false;


    });
  }
  getUsers() {
    this.UserService.getPublicData().subscribe(
      data => {
        this.publicdata = data;
      }
    )
  }
}
