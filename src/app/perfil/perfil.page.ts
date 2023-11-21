import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user-add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/regis-game'])
    })
    .catch(error => console.log(error))
  }

}
