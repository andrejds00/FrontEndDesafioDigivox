import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { Aluguel } from './../aluguel-lista/aluguel';
import { Item } from './../item-lista/item';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/clientes';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-aluguel-cadastro',
  templateUrl: './aluguel-cadastro.component.html',
  styleUrls: ['./aluguel-cadastro.component.css']
})
export class AluguelCadastroComponent implements OnInit {

  clientes: Cliente[];
  itens:    Item[];
  aluguel: Aluguel;
  clienteSelecionado: Cliente;
  itemSelecionado: Item;

  constructor(private servico: DigivoxapiService, private datePipe: DatePipe, private messageService: MessageService) { 
    this.aluguel = new Aluguel();
  }

  ngOnInit(): void {
    this.carregarClientes();
    this.carregarItens();
  }

  salvarAluguel(){
    this.aluguel.cliente = this.clienteSelecionado;
    this.aluguel.item    = this.itemSelecionado;
    this.aluguel.dataAluguel = this.datePipe.transform(this.aluguel.dataAluguel, 'dd/MM/yyyy');
    this.aluguel.dataDevolucao = this.datePipe.transform(this.aluguel.dataDevolucao, 'dd/MM/yyyy');    
     this.servico.salvarAluguel(this.aluguel).subscribe(
       resposta => {this.aluguel = resposta
       this.messageService.add({severity:'success', summary: 'Contrato Cadastrado/Atualizado', detail: 'Contrato Cadastrado/Atualizado com Sucesso!'});
       }
     )
  }

  carregarClientes(){
     this.servico.buscarClientes().subscribe(
       resposta => this.clientes = resposta
     )
  }

  carregarItens(){
    this.servico.buscarItens().subscribe(
      resposta => this.itens = resposta
    )
 }

}
