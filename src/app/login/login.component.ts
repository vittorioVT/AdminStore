import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    userName: '',
    password: ''
  }

  constructor(private service: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.loginData).subscribe((data: any) => {
      //console.log(data);
      localStorage.setItem('userName', data.UserName);
      localStorage.setItem('token_value', data.Token);
      this.router.navigate(['/body']);
    }, (error) => alert(error.error.Message));
  }

}
