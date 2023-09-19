import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AlertController } from '@ionic/angular';
//Mis importaciones


@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.page.html',
  styleUrls: ['./crear-juego.page.scss'],
})
export class CrearJuegoPage implements OnInit {
  //Declaración de variables
  @ViewChild('imgCancha', {static: true})
  imgCancha!: ElementRef;
  ocultarS1ficha: boolean = true;
  ocultarS2ficha: boolean = true;
  fmGame: FormGroup;
  switchPlayers: string = '';
  switchCanchas: string = '';
  date: string;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.fmGame = this.fb.group({
      'nameGame': new FormControl("", Validators.required),
      'ubicacion': new FormControl("", Validators.required),
      'date': new FormControl(new Date().toISOString()),
    });
  }

  ngOnInit() {
  }


//Funciones

  //CAMBIAR ESTADO BOOLEANO SEGÚN EL PARÁMETRO QUE RECIBE
  toggleS = false;
  toggleD = true;

  togglePlayers(players: String) {
    if (players === 'S') {
      this.switchPlayers='s';
      this.ocultarS1ficha = false;
      this.ocultarS2ficha = false;
      this.toggleD = false;
      this.toggleS = false;
    } else if (players === 'D') {
      console.log('Activado d');
      this.switchPlayers='D';
      this.ocultarS1ficha = true;
      this.ocultarS2ficha = true;
      this.toggleS = false;
      this.toggleD = false;
    }
  }
  //CAMBIAR CHANCHAS

  toggleAC = true;
  toggleAF = false;
  toggleCanchas(canchas: String){
    if (canchas === 'AC') {
      this.switchCanchas='AC'
      this.imgCancha.nativeElement.src = 'https://i.ibb.co/99LdTZs/clay-tennis-court-tactics-board-vector.jpg';
      this.toggleAF = false;
      this.toggleAC = false;
    } else if (canchas === 'AF') {
      this.switchCanchas = 'AF';
      this.imgCancha.nativeElement.src = 'https://i.ibb.co/MNVCb0h/blue-tennis-court-tactics-board-vector.jpg';
      this.toggleAC = false;
      this.toggleAF = false;


    }
  }

  //Adquirir datos formularios
  async validarFm(){
    var form = this.fmGame.value;

    if (this.fmGame.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debe llenar todos los datos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    } else {

      //Nombre del partido
      let nameGame = form.nameGame;
      let cantPlayers = this.switchPlayers;
      let nameCancha = this.switchCanchas;
      let ubicacion = form.ubicacion;
      let date = form.date;
      console.log(date);

    }



  }
}; //END CLASS
