import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(public postservice: PostService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })

  }
  get f() {
    return this.form.controls;

  }

  submit() {
    console.log(this.form.value);
    this.postservice.create(this.form.value).subscribe(
      (res: any) => {
        console.log('Post Created Sucessfully !');
        this.router.navigateByUrl('post/index');
      }
    )

  }
}
