import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { user } from '../../class/user';
import { logincredentials } from '../../class/logincredentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  users: user[] = [];
  newuser: user[] = [];
  logincredentials = new logincredentials();
  constructor(private userService: UserService,public router:Router) { }

  ngOnInit() {
    if (typeof window === 'undefined') {
    } else {
      if (!localStorage.getItem('users')) {
        this.loadUserData();
      }
      else {
        const Userdata = localStorage.getItem('users');
        if(Userdata)
        {
          this.users=  JSON.parse(Userdata);}
      }
    }
  }

  loadUserData() {
    this.users = this.userService.GetAllUserData();
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  loginclick() {
    if (this.logincredentials.Email.length == 0) {
      alert("Enter User Name");
    }
    else if (this.logincredentials.UserTypeId == 0) {
      alert("Select User Type");
    }
    else if (this.logincredentials.Password.length == 0) {
      alert("Enter Password");
    }
    else {
      const LoginDataMatch = this.users.find(x => x.Email == this.logincredentials.Email &&
        x.Password == this.logincredentials.Password &&
        x.UserTypeID == this.logincredentials.UserTypeId);
      if (LoginDataMatch) {

        localStorage.setItem('loggeduserdata', JSON.stringify(LoginDataMatch));
        
  this.router.navigate(['/dashboard'])
      }
      else {
        alert("Please Check Entered Username And Password")
      }

    }

  }
  OpenRegisterPage() {
    this.router.navigate(['/createuser'])
  };
}
