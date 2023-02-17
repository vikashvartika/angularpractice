import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rawvalue',
  templateUrl: './rawvalue.component.html',
  styleUrls: ['./rawvalue.component.css']
})
export class RawvalueComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) { }
  submitted: boolean = true;
  // reactiveForm = new FormGroup({
  //   name: new FormControl(''),
  //   id: new FormControl(''),
  //   company: new FormControl({ value: 'ABC', disabled: true }),
  //   email: new FormControl({ value: '', disabled: true })
  // });
  ngOnInit(): void {

    this.reactiveForm = this.fb.group({
      name: [''],
      id: [''],
      company: [''],
      email: ['']
    });
  }

  submit() {
    console.log(this.reactiveForm.value)
    console.log(this.reactiveForm.getRawValue())
  }

}


