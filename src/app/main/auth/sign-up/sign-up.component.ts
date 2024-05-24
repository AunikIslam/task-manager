import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  originalText = 'Manage Your Tasks!';
  displayText = '';
  cursor = '|';
  showLoginView = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    for (let i = 0; i < this.originalText.length; i++) {
      setTimeout(() => {
        this.displayText += this.originalText[i];
      }, 100 * i);
    }

    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }


  displayCursor(): void {
    setInterval(() => {
      if (this.cursor == '') {
        this.cursor = '|';
      } else {
        this.cursor = '';
      }
    }, 500);
  }

}