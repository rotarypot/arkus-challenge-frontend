import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private UserService: UserService
  ) { }

  public publicdata;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.UserService.getPublicData().subscribe(
      data => {
        this.publicdata = data;
        console.log(this.publicdata)
      }
    )
  }
}
