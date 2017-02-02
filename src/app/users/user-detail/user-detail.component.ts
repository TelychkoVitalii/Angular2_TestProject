import { Component } from '@angular/core';
import { User } from "../user";
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  selectedUser: User;
  private subscription: Subscription;
  private userIndex: number;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.userIndex = params['id'];
          this.selectedUser = this.userService.getUser(this.userIndex);
        }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
