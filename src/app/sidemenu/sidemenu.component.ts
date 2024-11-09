import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../class/user';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  users: user[] = [];
  LoggedUser = new user();
  constructor(public router: Router) { }

  ngOnInit() {
    this.getDataFromLocalStorage();
  }
  
  getDataFromLocalStorage() {
    if (localStorage.getItem('loggeduserdata')) {
      this.LoggedUser = localStorage.getItem('loggeduserdata') ? JSON.parse(localStorage.getItem('loggeduserdata')!) : null;

    }
    else {
      this.LoggedUser = new user();
    }
  }
  OpenDashboard() {
    this.router.navigate(['/dashboard'])
  };

  GotoLoginPage() {
    localStorage.clear();
    this.router.navigate(['/login'])
  };
  GotoMyProfilePage() {
    this.router.navigate(['/myprofile'])
  };
  GotoCreateNewUserPage() {
    this.router.navigate(['/createuser'])
  };

}
