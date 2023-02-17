import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-addarray',
  templateUrl: './addarray.component.html',
  styleUrls: ['./addarray.component.css']
})
export class AddarrayComponent implements OnInit {
  title = 'FormArray Example in Angular Reactive forms';

  skillsForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([])
    });

  }

  ngOnInit(): void {
  }
  get skills(): FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
}
