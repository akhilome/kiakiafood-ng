import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserSignupDetails } from '../shared/models/user.model';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  userDetails: UserSignupDetails;

  constructor(
    private auth: AuthService,
    private toast: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.resetUserDetails();
  }

  resetUserDetails() {
    this.userDetails = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      adminSecret: ''
    };
  }

  signUp() {
    this.auth.signup(this.userDetails).subscribe(
      () => {
        this.toast.success('signup successful, logging you in ...');
        setTimeout(() => this.router.navigate(['menu']), 1000);
      },
      () => {
        this.toast.error('something went wrong, try again');
      }
    );
  }
}
