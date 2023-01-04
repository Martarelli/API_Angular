import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL Base
  url: string = "http://localhost/api/php/";

  //Vetor de cursos
  vetor: Curso[] = [];

  //Construtor
  constructor(private http: HttpClient) { }

  //Inicializador
  ngOnInit(): void {
  }

  //Cadastro
  cadastro(): void {
    alert("CADASTRO");
  }

  //Selecao
  selecao(): void {
    alert("SELECAO");
  }

  //Alterar
  alterar(): void {
    alert("ALTERAR");
  }

  //Remover
  remover(): void {
    alert("Remover");
  }
}
