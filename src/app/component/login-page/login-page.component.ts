import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginobj:login;
  constructor(private http: HttpClient, private router: Router){
    this.loginobj = new login;
  }

  OnNext(){
    // debugger;
    this.http.post("https://localhost:44347/api/User/Login",this.loginobj).subscribe((response:any) => {
      if (response.result){
        alert("Login Successfull");
        this.router.navigateByUrl('/dashboard');
      }
      else{
        alert(response.message)
      }
    })
  }
}

export class login{
  user_Email: string;
  user_Passwords: string;

  constructor(){
    this.user_Email = '';
    this.user_Passwords = '';
  }
}
