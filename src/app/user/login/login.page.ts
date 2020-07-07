// import { AuthService } from './../../services/auth.service';
import { ApiService } from './../../services/api.service';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { validate } from 'json-schema';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postData = {
    username: '',
    password: ''
    };
  login: FormGroup;

  constructor(
     public router: Router,
    public apiService: ApiService,
    private formBuilder: FormBuilder,
  ) { 
    
  }


  
  // validateInputs() {
  //   let username = this.loginForm.value.username;
  //   let password = this.loginForm.value.password;
  //   this.postData = {
  //     username: "harsh3a3@gmail.com",
  //     password: "H1997"
  //     };
  //   return (
  //   this.postData.username &&
  //   this.postData.password &&
  //   username.length > 0 &&
  //   password.length > 0
  //   );
  //   }

  loginAction() {
    console.log('form loginAction()');
    console.log( this.login.value);
    let url = this.apiService.allApiEndPoints[0];
    
    
    // if (this.validateInputs()) {
    // this.apiService.test_login(this.postData).subscribe(
    // (res: any) => {
    // if (res.userData) {
    // // Storing the User data.
    // this.router.navigate(['profile']);
    // } else {
    // console.log('incorrect password.');
    // }
    // },
    // (error: any) => {
    // console.log('Network Issue.');
    // }
    // );
    // } else {
    // console.log('Please enter email/username or password.');
    // }
    
    this.apiService.sendHttpCall(url,this.login.value,"post").subscribe(
      (res: any) => {
      console.log(res);
      if (res.status==true) {
      // Storing the User data.
      let data=res.data;
      localStorage.setItem("id", data.id);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("role", data.role);

      this.router.navigate(['home']);
      } else {
      console.log('incorrect password.');
      }
      },
      (error: any) => {
      console.log('Network Issue.');
      }
      );
    }
ngOnInit(){
  this.login = this.formBuilder.group({
    username: ['harsh3a3@gmail.com', Validators.required],
    password: ['H1997', Validators.required]
  })
}


  

}
