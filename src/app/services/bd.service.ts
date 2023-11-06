import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicio {

  private urlApi = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }
  //Metodo GET
  getRecursos(): Observable<any> {
    return this.http.get(this.urlApi);
  }
  //Metodo POST
  crearRecurso(recurso: any): Observable<any> {
    return this.http.post(this.urlApi, recurso);
  }
  //Metodo PUT
  actualizarRecurso(id: string, recurso: any): Observable<any> {
    return this.http.put(`${this.urlApi}/${id}`, recurso);
  }
  //Metodo DELETE
  eliminarRecurso(id: string): Observable<any> {
    return this.http.delete(`${this.urlApi}/${id}`);
  }
}
