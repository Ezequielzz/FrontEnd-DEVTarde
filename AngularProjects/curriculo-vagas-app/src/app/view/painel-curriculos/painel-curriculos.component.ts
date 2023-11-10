// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { curriculo } from 'src/app/models/curriculo.model';
import { curriculoservice } from 'src/app/service/curriculos.service';
@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.css'],
})
export class PainelcurriculosComponent implements OnInit {
  public curriculo: curriculo = new curriculo(0, '', '', '', 0);
  // Uma instância de 'curriculo' para rastrear os dados do formulário
  public curriculos: curriculo[] = [];
  // Uma matriz para armazenar as curriculos listadas
  constructor(private _curriculosService: curriculoservice) { }
  // aplica o serviço 'curriculoservice' no construtor
  ngOnInit(): void {
    this.listarcurriculos();
    // Quando o componente é inicializado, lista as curriculos disponíveis
  }
  listarcurriculos() {
    // Lista as curriculos do servidor usando o serviço 'curriculoservice'
    this._curriculosService.getcurriculos().subscribe((retornacurriculo) => {
      this.curriculos = retornacurriculo.map((item) => {
        // Mapeia os dados retornados para objetos 'curriculo'
        return new curriculo(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }
  listarcurriculo(curriculo: curriculo) {
    // Função para listar uma curriculo individual no formulário para edição
    this.curriculo = curriculo;
    // A curriculo clicada é definida como a curriculo atual no formulário
  }
  cadastrar() {
    // Função para cadastrar uma nova curriculo
    this._curriculosService.cadastrarcurriculo(this.curriculo).subscribe(
      () => {
        // Após cadastrar com sucesso
        this.curriculo = new curriculo(0, '', '', '', 0); // Limpa o formulário
        this.listarcurriculos(); // Atualiza a lista de curriculos
      },
      (err) => {
        console.log('Erro ao cadastrar', err);
        // Em caso de erro, exibe uma mensagem no console
      }
    );
  }
  atualizar(id: number) {
    // Função para atualizar uma curriculo existente
    this._curriculosService.atualizarcurriculo(id, this.curriculo).subscribe(
      () => {
        // Após atualizar com sucesso
        this.curriculo = new curriculo(0, '', '', '', 0); // Limpa o formulário
        this.listarcurriculos(); // Atualiza a lista de curriculos
      },
      (err) => {
        console.log('Erro ao atualizar', err);
      }
    );
  }
  excluir(id: number) {
    // Função para excluir uma curriculo
    this._curriculosService.removercurriculo(id).subscribe(
      () => {
        // Após excluir com sucesso
        this.curriculo = new curriculo(0, '', '', '', 0); // Limpa o formulário
        this.listarcurriculos(); // Atualiza a lista de curriculos
      },
      (err) => {
        console.log('Erro ao excluir', err);
      }
    );
  }
}
