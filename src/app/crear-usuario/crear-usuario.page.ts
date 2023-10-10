import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/user-add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  formReg: FormGroup;

  constructor( private userService: UsersService, private router: Router) {

    this.formReg = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    })

  }

  ngOnInit() {
  }
  onSubmit(){
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/login'])
    })
    .catch(error => {
      console.log(error)
      alert('Ingrese Datos Válidos');
    });
  }

}
