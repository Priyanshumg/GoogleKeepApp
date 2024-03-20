import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CreateNewAccountComponent } from '../create-new-account/create-new-account.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, DashboardComponent, CreateNewAccountComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginobj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginobj = new Login();
  }

  OnNext() {
    // this.http.post("https://localhost:44347/api/User/Login", this.loginobj).subscribe((response: any) => {
    //   this.router.navigateByUrl('/dashboard');
    //   if (response.result) {
    //     alert("Login Successful");
    //   } else {
    //     alert(response.message);
    //   }
    // });
    debugger;
    this.http.post("https://localhost:44347/api/User/Login", this.loginobj).subscribe((response: any) => {
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem('token', response.data);
      alert("Login Successful");
    }
    ,(error:any)=>{
      alert(error.message);
    });
  }

  OnCreate() {

  }
}

export class Login {
  user_Email: string;
  user_Passwords: string;

  constructor() {
    this.user_Email = '';
    this.user_Passwords = '';
  }
}
