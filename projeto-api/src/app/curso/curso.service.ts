import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  //URL
  url: string = "http://localhost/api/php/";

  //Vetor de cursos
  vetor: Curso[] = [];

  //Construtor
  constructor(private http: HttpClient) { }

  //Obter todos cursos
  obterCursos(): Observable<Curso[]> {
    return this.http.get(this.url + "listar").pipe(
      map((res) => {
        this.vetor = res['cursos'];
        return this.vetor
      })
    )
  }

}
