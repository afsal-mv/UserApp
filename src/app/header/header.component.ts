import { Component } from '@angular/core';
import {formatDate } from '@angular/common';
import { user } from '../../class/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  MenuToggled=false;
  LoggedUser = new user();
  ngOnInit() {
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
      this.LoggedUser.UserName="Guest";
    }
  }

//Menu bar toggle function
toggleMenu() {
  this.MenuToggled = !this.MenuToggled; 
}
closeToggleMenu() {
  this.MenuToggled = false;
}

}
