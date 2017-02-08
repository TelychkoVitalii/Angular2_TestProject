import { Component, style, state, animate, transition, trigger } from '@angular/core';
import { User } from "../user";
import { Http, Response } from '@angular/http';
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute } from "@angular/router";
import { Location }  from '@angular/common';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(400)
      ]),
      transition('* => void', [
        animate(200, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
})
export class UserDetailComponent {
  users: User[] = [];
  selectedUser: User;
  private subscription: Subscription;
  private userIndex: number;

  constructor(private route: ActivatedRoute, private location: Location, private http: Http) {}

  ngOnInit() {
    this.getUserID();
    this.getUserData();
  }

  getUserID() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.userIndex = params['id'];
        }
    )
  }

  getUserData() {
     this.http.get('https://test-aaf3b.firebaseio.com/users.json')
      .map((data: Response) => data.json())
      .subscribe(
        (data: User[]) => {
          this.users = data;
          this.selectedUser = this.users[this.userIndex];
        }
        );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
