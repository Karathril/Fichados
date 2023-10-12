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
      nombre: new FormControl('', [Validators.required, Validators.maxLength(12),Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(12),Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required)
    })

  }

  ngOnInit() {
  }
  onSubmit(){

      const email =this.formReg.value.email;
      const pass =this.formReg.value.password;
      this.userService.register(email,pass)
      .then((userCredential)=> {
        const user = userCredential.user; // El objeto del usuario autenticado
        console.log(user)
        this.userService.addUser(this.formReg.value);
        this.router.navigate(['/login'])
      })
      .catch((error) => {
        console.log(error)
        alert('Correo ya registrado');
      });
  }



}
