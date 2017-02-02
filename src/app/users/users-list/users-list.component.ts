import { Component } from '@angular/core';
import { User } from "../user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
    users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
      this.users = this.userService.getUsers();
      console.log(this.users);
  }

  // onAge(a: User, b: User) {
  //   return this.users.sort(a > b);
  // }
  //
  // totalUsers() {
  //   return this.users.length;
  // }
  //
  // averageAge() {
  //     let sum = this.users.reduce((a, b) => (a + b));
  //     let aver = sum / this.users.length;
  //     console.log(aver);
  // }
}