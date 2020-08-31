import { Item } from './../item-lista/item';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Reserva } from './reserva';

@Component({
  selector: 'app-reserva-lista',
  templateUrl: './reserva-lista.component.html',
  styleUrls: ['./reserva-lista.component.css']
})
export class ReservaListaComponent implements OnInit {

  reservas: Reserva[];
  itemSelecionado: Item;

  constructor(private servico: DigivoxapiService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarReservas();
  }


  buscarReservas(){
    this.servico.buscarReservas().subscribe(
     resposta => {this.reservas = resposta
     
     }
    ); 
 }


 deletarReserva(reserva: Reserva){
    

  this.confirmationService.confirm({
    message: 'Deseja Realmente excluir a Reserva?',
    header: 'Confirmação',
    key: 'deletarReserva',
    acceptLabel: 'Sim',
    rejectLabel: 'Não',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.servico.deleteReserva(reserva).subscribe(
        resposta => {
          
          this.buscarReservas();
          //ATUALIZAR STATUS ITEM
        this.itemSelecionado = reserva.item;  
        this.itemSelecionado.status = "DISPONÍVEL";
        this.servico.salvarItem(this.itemSelecionado).subscribe(
          resposta => {
            this.messageService.add({severity:'success', summary: 'Item Atualizado', detail: 'Item Atualizado com Sucesso!'});
          }
        )
          this.messageService.add({severity:'success', summary: 'Reserva Deletada', detail: 'Reserva Deletada com Sucesso!'});
        }
      )
    },
    reject: () => {
      this.messageService.add({severity:'warn', summary: 'Processo Cancelado', detail:'Descartando execução'});
    }
  });


    
}

}
