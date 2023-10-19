import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../services/partido.service';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Partido } from '../interfaces/Partido';

@Component({
  selector: 'app-public-game',
  templateUrl: './public-game.page.html',
  styleUrls: ['./public-game.page.scss'],
})
export class PublicGamePage implements OnInit {

  //Variables
  tipoPartido: any = "Double";
  constructor(
    private partidoService: PartidoService,
    private firestore: Firestore
  ) { }

  ngOnInit() {


  }
  partidos$ = this.partidoService.getGames();

  async getGames(): Promise<any> {
    const games = collection(this.firestore, 'partido');
    const gameSnapshot = await getDocs(games);
    return gameSnapshot.docs.map(doc => {
      let data = doc.data() as Partido;
      if (data.cantPlayers === "Single") {
        this.tipoPartido = 'Single';
      }
      return data;

    });
  }

  registrarUsuario(partido: any, playerNumber: any) {
    const partidoID = partido.id;
    // Luego, puedes utilizar el partidoID para registrar zal usuario en el partido
    this.partidoService.addPlayer(partidoID, playerNumber);
  }
}
