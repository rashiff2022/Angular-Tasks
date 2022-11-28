import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
    title: string = "Reactive Form";

  loginForm = new FormGroup({
    user : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  login(){
        console.log(this.loginForm.value);
        };

  get user(){
       return this.loginForm.get('user');
  }

  get password(){
      return this.loginForm.get('password');
  }
}
