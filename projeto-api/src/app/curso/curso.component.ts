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
  cadastro(){
    this.cursoService.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {

        //Adicionando dados ao vetor
        this.vetor = res;

        //Limpar os atributos
        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;

        //Atualizar a listagem
        this.selecao();
      }
    )
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
  alterar() {
    this.cursoService.atualizarCurso(this.curso).subscribe(
      (res) => {
        //Atualizar dados ao vetor
        this.vetor = res;

        //Limpar os atributos
        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;

        //Atualizar a listagem
        this.selecao();
      }
    )
  }

  //Remover
  remover() {
    this.cursoService.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res
        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;
      }
    )
  }
}
