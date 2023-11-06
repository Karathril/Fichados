import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/user-add.service';
import { Router } from '@angular/router';
import { MiServicio } from '../services/bd.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLog: FormGroup;
  datos:any;
  constructor(
              private bd : MiServicio,
              private userService: UsersService,
              private router: Router,) {

    this.formLog = new FormGroup({
      email: new FormControl('',[Validators.email]),
      password: new FormControl(''),
    })

  }

  ngOnInit() {
    this.bd.getRecursos().subscribe({
      next: data => {
        this.datos = data;
        console.log(this.datos);

      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }

  async onSubmit(){
    await this.userService.login(this.formLog.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/home'])
    })
    .catch(error => {
      console.log(error)
      alert('Usuario Inválido')
    });
  }

}
