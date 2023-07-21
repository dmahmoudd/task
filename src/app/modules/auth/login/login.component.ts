import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  passwordHidden:boolean=false

  ngOnInit(): void {
    this.form = this.initForm();
  }
  constructor(private formBuilder: FormBuilder) {}
  initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }
  createAccount(){
    if(this.form.valid){

    }
    else{
      this.form.markAllAsTouched();
    }
  }
}
