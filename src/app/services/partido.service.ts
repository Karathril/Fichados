import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Partido } from '../interfaces/Partido';

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



}//END
