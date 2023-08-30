import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import Place from '../interfaces/place.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore:Firestore) { }

  addPlace(place: Place){
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<Place[]>{
    const placeRef = collection(this.firestore, 'places');
    return collectionData(placeRef,{idField:'id'}) as Observable<Place[]>
  }
}
