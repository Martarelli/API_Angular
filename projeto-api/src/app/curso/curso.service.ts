import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throws } from 'assert';
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

  //Cadastrar curso
  cadastrarCurso(c:Curso): Observable<Curso[]>{
    return this.http.post(this.url + "cadastrar", {cursos:c}).pipe(
      map((res) => {
        this.vetor.push(res['cursos']);
        return this.vetor;
      })
    )
  }

}
