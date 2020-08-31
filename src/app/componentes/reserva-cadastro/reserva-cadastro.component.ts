import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Item } from './../item-lista/item';
import { Cliente } from './../clientes/clientes';
import { Reserva } from './../reserva-lista/reserva';
import { MessageService } from 'primeng/api';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva-cadastro',
  templateUrl: './reserva-cadastro.component.html',
  styleUrls: ['./reserva-cadastro.component.css']
})
export class ReservaCadastroComponent implements OnInit {

  reserva: Reserva;
  id: number;
  statusBotao: string;
  clientes: Cliente[];
  itens: Item[];
  clienteSelecionado: Cliente;
  itemSelecionado: Item;

  constructor(private servico: DigivoxapiService, private datePipe: DatePipe, private messageService: MessageService, private activeRouter: ActivatedRoute) {
    this.reserva = new Reserva();
    this.clientes = [];
    this.itens = [];
  }

  ngOnInit(): void {

    console.log(new Date)

    this.carregarClientes();
    this.carregarItens();

    let params: Observable<Params> = this.activeRouter.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.statusBotao = "Atualizar"
        this.servico.buscarReservaById(this.id).subscribe(
          resposta => {

            this.reserva = resposta;
            this.clienteSelecionado = this.reserva.cliente;
            this.itemSelecionado = this.reserva.item
          }, erroResposta => this.reserva = new Reserva()
        )
      } else {
        this.statusBotao = "Cadastrar"
      }

    })
  }

  salvarReserva() {
    
    let dataHoje = this.datePipe.transform(new Date, 'dd/MM/yyyy');
    let dataReser = this.datePipe.transform(this.reserva.dataReserva, 'dd/MM/yyyy');
    console.log(dataHoje)
    console.log(dataReser)

    if (dataReser === dataHoje) {
      this.messageService.add({ severity: 'error', summary: 'Reserva com Data Errada', detail: 'Não pode ser salvo uma reserva na data de Hoje!' });
    } else {

      this.reserva.cliente = this.clienteSelecionado;
      this.reserva.item = this.itemSelecionado;
      this.reserva.dataReserva = this.datePipe.transform(this.reserva.dataReserva, 'dd/MM/yyyy');
      this.reserva.status = "ATIVO"
      this.servico.salvarReservas(this.reserva).subscribe(
        resposta => {
          this.reserva = resposta

          //ATUALIZAR STATUS ITEM
          this.itemSelecionado.status = "RESERVADO";
          this.servico.salvarItem(this.itemSelecionado).subscribe(
            resposta => {
              this.messageService.add({ severity: 'success', summary: 'Item Reservado', detail: 'Item Reservado com Sucesso!' });
            }
          )
          this.messageService.add({ severity: 'success', summary: 'Reserva Cadastrado/Atualizado', detail: 'Reserva Cadastrado/Atualizado com Sucesso!' });
        }
      )
    }


  }

  carregarClientes() {
    this.servico.buscarClientes().subscribe(
      resposta => this.clientes = resposta
    )
  }

  carregarItens() {
    this.servico.buscarItens().subscribe(
      resposta => this.itens = resposta
    )
  }
}
