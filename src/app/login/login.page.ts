import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/user-add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLog: FormGroup;

  constructor(private userService: UsersService, private router: Router) {

    this.formLog = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    })

  }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.login(this.formLog.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/crear-juego'])
    })
    .catch(error => {
      console.log(error)
      alert('Usuario Inválido')
    });
  }

}
