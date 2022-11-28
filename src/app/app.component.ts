import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  loginUser(){
    console.warn(this.loginForm.value);
  }

  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }

  title: string ="Structural Directives";

  courses = [{id: 1, name: "Angular" , skill: "Front End"},{id: 2, name: "Node" , skill: "Back End"},{id: 3, name: "Mongodb" , skill: "Database"}];
}
