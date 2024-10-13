import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from './store/authAction';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  authForm:FormGroup;
  constructor(private store:Store){}
  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.authForm=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    })
  }


  logIn(){
    let payload=this.authForm.value;
    this.store.dispatch(login({email:payload.email,password:payload.password}));
  }

}
