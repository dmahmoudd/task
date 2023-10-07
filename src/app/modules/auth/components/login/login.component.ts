import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import user from '../../../../../assets/dummyData/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  passwordHidden: boolean = false;

  validateUser = user.data;
  valid!: boolean;

  ngOnInit(): void {
    this.form = this.initForm();
  }
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    this.validateUser.forEach((user:any) => {
      if (user.Email == this.form.controls['email'].value) {
        this.valid = true;
        localStorage.setItem('userName', user.Name)
        localStorage.setItem('userAddress', user.Address)
      } 
    });
    console.log(this.valid, this.form.valid)
    if (this.form.valid && this.valid) {
      this.router.navigateByUrl('/allproducts');
    } else {
      this.form.markAllAsTouched();
    }
  }
}
