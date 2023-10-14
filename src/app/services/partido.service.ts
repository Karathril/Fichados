import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, getDocs } from '@angular/fire/firestore';
import { Partido } from '../interfaces/Partido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(
              private firestore: Firestore

              ) { }

//Metodo para agregar partido a BD
  addGame(partido: Partido){
  const gameRef = collection(this.firestore, 'partido');
  return addDoc(gameRef,partido);
  }

  //Metodo para obtener los partidos en BD
  getGames(): Observable<any> {
  return collectionData(collection(this.firestore, 'partido'));
  }

}//END
