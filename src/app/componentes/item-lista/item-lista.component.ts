import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Item } from './item';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit {

  itens: Item[];

  constructor(private servico: DigivoxapiService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarItem();
  }

  buscarItem(){
    this.servico.buscarItens().subscribe(
     resposta => {this.itens = resposta
     
     }
    ); 
 }

 deletarItem(item: Item){
    

  this.confirmationService.confirm({
    message: 'Deseja Realmente excluir o Item?',
    header: 'Confirmação',
    key: 'deletarItem',
    acceptLabel: 'Sim',
    rejectLabel: 'Não',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.servico.deleteItem(item).subscribe(
        resposta => {
          
          this.buscarItem();
          this.messageService.add({severity:'success', summary: 'Item Deletado', detail: 'Item Deletado com Sucesso!'});
        }
      )
    },
    reject: () => {
      this.messageService.add({severity:'warn', summary: 'Processo Cancelado', detail:'Descartando execução'});
    }
  });


    
}

}
