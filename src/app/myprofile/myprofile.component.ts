import { Component } from '@angular/core';
import { user } from '../../class/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent {
  users: user[] = [];
  LoggedUser = new user();
  constructor(private userService: UserService) { }
  ngOnInit(): void {

    if (typeof window !== 'undefined' && window.localStorage) {
      this.getDataFromLocalStorage();
    }
  }

  getDataFromLocalStorage() {
    if (localStorage.getItem('loggeduserdata')) {
      this.LoggedUser = localStorage.getItem('loggeduserdata') ? JSON.parse(localStorage.getItem('loggeduserdata')!) : null;
    }
    else {
      this.LoggedUser = new user();
    }
  }

}
