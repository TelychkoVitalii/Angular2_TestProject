import { Component } from '@angular/core';
import { User } from "../user";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent {
    users: User[] = [];
    public sortBy = ['FirstName', 'LastName', 'Age', 'City'];
    public totalBy = ['Total Users', 'Men', 'Women', 'Average Age'];
    public tableItems = ['FirstName', 'LastName', 'Avatar', 'Age', 'City', 'Sex'];
    public selectedChoice: number;

    constructor(private http: Http) {}

    ngOnInit() {
        return this.http.get('https://test-aaf3b.firebaseio.com/users.json')
            .map((data: Response) => data.json())
            .subscribe(
                (data: User[]) => {
                    this.users = data;
                }
            );
    }


    // Select with total info
    selectedTotal(e) {
        if (e.target.value === 'Total Users') {
            let quantity = this.users.length;
            return this.selectedChoice = quantity;
        } else if (e.target.value === 'Men') {
            let male = this.users.filter(function (person) {
                if (person.sex === 'male') {
                    return true;
                } else return;
            });
            return this.selectedChoice = male.length;
        } else if (e.target.value === 'Women') {
            let female = this.users.filter(function (person) {
                if (person.sex === 'female') {
                    return true;
                } else return;
            });
            return this.selectedChoice = female.length;
        } else {
            let arr = [];
            this.users.filter(function (person) {
               if (person.age) {
                return arr.push(person.age);
               } else return;
            });
            let sum = arr.reduce((a, b) => (a + b));
            return this.selectedChoice = sum / this.users.length;
        }
    }

    // Filter

   findMatches(wordToMatch) {
        return this.users.filter(name => {
            const regex = new RegExp(wordToMatch, 'gi');
            return name.firstname.match(regex);
        })
    }



    // Sort
    selectedSort(e) {
        let arr: any = [];
        if (e.target.value === 'FirstName') {
            this.users.filter((person) => arr.push(person));
            arr.sort((a, b) => a > b);
            console.log(arr);
        } else return;
    }
}




