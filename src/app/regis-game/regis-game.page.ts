import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-regis-game',
  templateUrl: './regis-game.page.html',
  styleUrls: ['./regis-game.page.scss'],
})
export class RegisGamePage implements OnInit {
fmRegistroGame:FormGroup;
  constructor(
              public fb: FormBuilder,
              public alertController: AlertController
    ) {
    this.fmRegistroGame = this.fb.group({
      'aces': new FormControl('',Validators.required),
      'dobleFalta': new FormControl('',Validators.required),
      'resultadoPartido': new FormControl('',Validators.required),
      'tipoCancha':  new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
  }
  //Funcion para guardar y validar los datos del form page
  async guardarDatos(){
    var form = this.fmRegistroGame.value;

    if(this.fmRegistroGame.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debe llenar todos los datos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    if (form) {
      
    }
  }
}
