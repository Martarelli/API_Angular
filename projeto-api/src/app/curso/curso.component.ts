import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor() { }

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
