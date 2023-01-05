import { CursoService } from './curso.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //Vetor de cursos
  vetor: Curso[] = [];

  //Objeto da classe Curso
  curso = new Curso();

  //Construtor
  constructor(private cursoService: CursoService) { }

  //Inicializador
  ngOnInit(): void {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }

  //Cadastro
  cadastro(): void {
  }

  //Selecao
  selecao(): void {
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res
      }
    )
  }

  //Alterar
  alterar(): void {
  }

  //Remover
  remover(): void {
  }
}
