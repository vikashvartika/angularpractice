import { Component, OnInit } from '@angular/core';
import { ILogin } from '../interfaces/login';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: ILogin = { userid: "admin", password: "admin@123" }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) { }

  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  userid: string;
  passwprd: string;

  // model: ILogin = { userid: "admnin", password: "admin@123" }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]

    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    else {
      // console.log(this.loginForm.get('userid')?.value);
      // console.log(this.loginForm.get('password')?.value);
      // console.log(this.model.userid);
      // console.log(this.model.password);

      if (this.loginForm.get('userid')?.value == this.model.userid && this.loginForm.get('password')?.value == this.model.password) {
        console.log('Login successful');
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.loginForm.get('userid')?.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your User Id and password";
      }

      // if (this.f.userid.value = this.model.userid && this.f.['password'].value = this.model.password) {
      //   console.log('Login successful');
      //   localStorage.setItem('isLoggedIn', "true");
      //   localStorage.setItem('token', this.f.userid.value);
      //   this.router.navigate([this.returnUrl]);
      // }
      // else {
      //   this.message = "Please check your User Id and password";
      // }
    }
  }


}
