import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { BaseService } from '../../../services/base-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  originalText = 'Manage Your Tasks!';
  displayText = '';
  cursor = '|';
  showLoginView = true;

  constructor(private formBuilder: FormBuilder, private service: BaseService) {
    // this.service.googleSignUp()
  }

  ngOnInit() {
    this.login();
    for (let i = 0; i < this.originalText.length; i++) {
      setTimeout(() => {
        this.displayText += this.originalText[i];
      }, 120 * i);
    }

    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required],
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

  login(): void {
    this.service
      .fetchData('users', this.loginForm.get('userName').value, 'userName')
      .subscribe((pResponse) => {
        console.log(pResponse);
      });
  }
}
