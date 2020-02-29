import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent  {

  loginForm: FormGroup;

  error_messages = {
    'fname': [
      { type: 'required', message: 'Please Enter First Name' },
    ],

    'lname': [
      { type: 'required', message: 'Please Enter Last Name' }
    ],

    'age': [
      { type: 'required', message: 'age is required.' },
      { type: 'min', message: 'Age Range is 18 to 60.' },
      { type: 'max', message: 'Age Range is 18 to 60.' }
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length is too short.' },
      { type: 'maxlength', message: 'Invalid Email length.' },
      { type: 'email', message: 'Please enter valid email ID!'}
    ],

    'mobile': [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'pattern', message: 'first number should not be zero' },
      { type: 'minlength', message: 'it should contain min of 1o numbers.' }
    
    ],

    'streetadress': [
      { type: 'required', message: 'streetaddress is required.' }
    ],

    'city': [
      { type: 'required', message: 'city name is required.' }
    ],
    'pincode': [
      { type: 'required', message: 'pincode  is required.' },
      { type: 'minLength', message: 'pincode should contain 6 numbers' },
    ],

    'country': [
      { type: 'required', message: 'country is required.' }
    ],
    'trainer': [
      { type: 'required', message: 'Trainer is Requied' }
    ],

    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password length is too short.' },
      { type: 'maxlength', message: 'Password length is too long.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password length is too short. ' },
      { type: 'maxlength', message: 'Password length is too long.' }
    ],
  }

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(18),
        Validators.max(60)
        
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])),
      mobile: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[1-9][0-9]\d{9}')
      ])),
      streetadress : new FormControl('', Validators.compose([
        Validators.required
      ])),

      city: new FormControl('', Validators.compose([
        Validators.required
      ])),
      pincode: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('[0-9]\d{5}')
        Validators.minLength(6)
      ])),
      country: new FormControl('', Validators.compose([
        Validators.required
      
      ])),
      trainer: new FormControl('', Validators.compose([
        Validators.required
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])),
    }, { 
      validators: this.password.bind(this)
    });
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

}
