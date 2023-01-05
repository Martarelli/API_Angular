import { HttpClient, HttpParams } from '@angular/common/http';
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

  //Curso
  curso = new Curso;

  //Construtor
  constructor(private http: HttpClient) { }

  //Obter todos cursos
  obterCursos(): Observable<Curso[]> {
    return this.http.get(this.url + "listar").pipe(
      map((res) => {
        // this.vetor = res['cursos'];
        return this.vetor
      })
    )
  }

  //Cadastrar curso
  cadastrarCurso(c: Curso): Observable<Curso[]>{
    return this.http.post(this.url + "cadastrar", {cursos:c}).pipe(
      map((res) => {
        // this.vetor.push(res['cursos']);
        return this.vetor;
      })
    )
  }

  //Remover curso
  removerCurso(c: Curso): Observable<Curso[]>{
    const params = new HttpParams().set("idCurso", c.idCurso?.toString() || '');

    return this.http.delete(this.url + 'excluir', {params: params}).pipe(
      map((res) => {
        const filtro = this.vetor.filter((curso) => {
          return +curso['idCurso'] !== +c.idCurso;
        });

        return this.vetor = filtro;
      })
    )
  }

  //Selecionar curso especifico
  selecionarCurso(c: Curso){
    this.curso.idCurso = c.idCurso;
  }

  //Atualizar Curso
  atualizarCurso(c: Curso): Observable<Curso[]>{
    return this.http.put(this.url+'alterar', {cursos: c}).pipe(
      map((res) => {
        const cursoAlterado = this.vetor.find((item) => {
          return +item['idCurso'] === +['idCurso'];
        });

        if(cursoAlterado){
          cursoAlterado['nomeCurso'] = c['nomeCurso'];
          cursoAlterado['valorCurso'] = c['valorCurso'];
        }

        return this.vetor;
      })
    )
  }
}
