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
      return data;
    });
  }
}
