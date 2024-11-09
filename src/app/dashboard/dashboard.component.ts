import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { user } from '../../class/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {  
users: user[] = [];
filteredUsers: user[] = [];
searchData: string = '';
SSId: number = 0;
GoldSubscribedUserCount: number=0;
PlatinumSubscribedUserCount:number=0;
LiteSubscribedUserCount:number=0;

  constructor(private userService: UserService) {}

  //to initialize the functions
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.getDataFromLocalStorage();
    }
    if (this.users.length == 0) {
    this.users = this.userService.GetAllUserData();
    }
    this.GoldSubscribedUserCount = this.users.filter(x => x.SubscriptionStatusid == 3).length;  
    this.PlatinumSubscribedUserCount = this.users.filter(x => x.SubscriptionStatusid == 2).length; 
    this.LiteSubscribedUserCount = this.users.filter(x => x.SubscriptionStatusid == 1).length; 
    this.filteredUsers = this.users; 
  }

  getDataFromLocalStorage() {
    if (localStorage.getItem('users')) {
      this.users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : null;
    }
    else {
    }
  }
 
  //filtering subscription status
  onFilterChange() {
    if (Number(this.SSId) === 0) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(x => x.SubscriptionStatusid == this.SSId);  
    }
  }

  //search text
  onSearchChange() {
    if(this.SSId==0)
    {
    this.filteredUsers = this.users.filter(x => 
      x.UserName.toLowerCase().includes(this.searchData.toLowerCase()) || 
      x.Email.toLowerCase().includes(this.searchData.toLowerCase())
    );
  }
  else
  {
    this.filteredUsers = this.users.filter(x => 
      x.UserName.toLowerCase().includes(this.searchData.toLowerCase())  && x.SubscriptionStatusid==this.SSId || 
      x.Email.toLowerCase().includes(this.searchData.toLowerCase()) && x.SubscriptionStatusid==this.SSId
    );

  }
  }

}

