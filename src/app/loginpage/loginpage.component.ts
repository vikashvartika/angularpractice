import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  lform!: FormGroup;

  arr: string[] = ['vikash', 'sunil', 'akesh', 'ram'];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.lform = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get f() {
    return this.lform.controls;
  }

  submit() {
    // console.log(this.f(username).value);
    console.log(this.lform.get('username')?.value);
    console.log(this.lform.get('password')?.value);

    /* check value single user*/

    // if (this.lform.get('username')?.value == 'vikash' && this.lform.get('password')?.value == 'gupta') {
    //   console.log('Login  Sucessfully !');
    //   this.router.navigateByUrl('post/index');
    // }

    /* check value multiple array */

    if (this.arr.includes(this.lform.get('username')?.value) && this.lform.get('password')?.value == 'gupta') {
      console.log('Login  Sucessfully !');
      this.router.navigateByUrl('post/index');
    }




    console.log(this.lform.value);
  }

}
