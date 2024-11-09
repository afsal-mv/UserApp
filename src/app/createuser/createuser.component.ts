import { Component } from '@angular/core';
import { user } from '../../class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {
  users: user[] = [];
  newuser = new user();
  constructor(public router: Router) { }
  ngOnInit() {

    if (typeof window !== 'undefined' && window.localStorage) {
      this.getDataFromLocalStorage();
    }
  }

  getDataFromLocalStorage() {
    if (localStorage.getItem('users')) {
      this.users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : null;
    }
    else {
    }
  }
  SaveUser() {
    if (this.newuser.SubscriptionStatusid != 0 && this.newuser.UserName != "" && this.newuser.Password != ""
      && this.newuser.Email != "" && this.newuser.Contactnumber != 0
    ) {
      if (this.users.length > 0) {
        const lastUserID = this.users[this.users.length - 1].UserID;
        this.newuser.UserID = lastUserID + 1;
        if (this.newuser.SubscriptionStatusid == 1) {
          this.newuser.SubscriptionStatus = "Lite";
        }
        else if (this.newuser.SubscriptionStatusid == 2) {
          this.newuser.SubscriptionStatus = "Platinum";
        }
        else if (this.newuser.SubscriptionStatusid == 3) {
          this.newuser.SubscriptionStatus = "Gold";
        } 
        this.newuser.UserTypeID = 2;
        this.users.push(this.newuser);
        alert("User Data Saved Successfully!.For this is saved localstorage so here it will logout and relogin to check its saved or not");
        localStorage.clear();
        localStorage.setItem('users', JSON.stringify(this.users));

        this.router.navigate(['/login'])
      }
    }
    else {
      alert("Please Fill all Details All mandatory");
    }
  }

  //usertypeid 1 admin user
  //2 normal

}
