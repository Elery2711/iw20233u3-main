import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: String = '';
  password: String = '';
  check: boolean = false;
  message: String = '';

  constructor(private UsersService: UsersService, private router: Router) {

  }

  ngOnInit() {}

  public login() {
    this.message = 'cargando...';
    if (this.UsersService.checkUser(this.email, this.password)) {
      this.message = 'Usuario correcto';
      this.router.navigate(['/tabs/tab1']);

    } else {
      this.check = false;
      this.message = 'Usuario incorrecto'
    }
  }
}
