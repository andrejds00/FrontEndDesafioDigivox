import { Aluguel } from './../aluguel-lista/aluguel';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientesCadastrados: number;
  reservasCadastradas: number;
  alugueisAtivos: number;
  alugueisDevolvidos: number;
  alugueis: Aluguel[];
  devolucoes: Aluguel[];
  data: any;

  constructor(private servico: DigivoxapiService) { 
    this.reservasCadastradas = 0;
    }

  ngOnInit(): void {
    this.buscarClientes();
    this.buscarReservas();
    this.buscarAluguel();
    this.buscarDevolvidos();
    this.buscarDevolucaoSemana();
    this.buscarAlugueisSemana();
    this.delay(3000);    
  }

  buscarClientes(){
    this.servico.buscarClientes().subscribe(
      resposta => {
        this.clientesCadastrados = resposta.length
      }
    )
  }

  buscarReservas(){
    this.servico.buscarReservas().subscribe(
      resposta => {
        this.reservasCadastradas = resposta.length        
      }
    )
  }

  buscarAluguel(){
    this.servico.buscarAlugueisAtivos().subscribe(
      resposta => this.alugueisAtivos = resposta.length
    )
  }

  buscarDevolvidos(){
    this.servico.buscarAlugueisDevolvidos().subscribe(
      resposta => this.alugueisDevolvidos = resposta.length
    )
  }

  buscarDevolucaoSemana(){
    this.servico.buscarDevolucoesSemana().subscribe(
      resposta => {
            this.devolucoes = resposta;
      }
    )
  }

  buscarAlugueisSemana(){
    this.servico.buscarAlugueisSemana().subscribe(
      resposta => {
            this.alugueis = resposta;
      }
    )
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.carregarPizza());
}

  carregarPizza(){
           
    this.data = {
      labels: ['Reservas','Alugados','Devolvidos'],
      datasets: [
          {
              data: [this.reservasCadastradas, this.alugueisAtivos, this.alugueisDevolvidos],
              backgroundColor: [
                  "#FFD700",
                  "#228B22",
                  "#B40404"
              ],
              hoverBackgroundColor: [
                  "#FFFF00",
                  "#32CD32",
                  "#FF0000"
              ]
          }]    
      };

  }

}
