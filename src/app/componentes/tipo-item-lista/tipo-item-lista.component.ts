import { TipoItem } from './tipoItem';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tipo-item-lista',
  templateUrl: './tipo-item-lista.component.html',
  styleUrls: ['./tipo-item-lista.component.css']
})
export class TipoItemListaComponent implements OnInit {

  tipos: TipoItem[];

  constructor(private servico: DigivoxapiService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarTipo();
  }


  buscarTipo(){
    this.servico.buscarTipoItem().subscribe(
     resposta => {this.tipos = resposta
     
     }
    ); 
 }


 deletarTipo(tipo: TipoItem){
    

  this.confirmationService.confirm({
    message: 'Deseja Realmente excluir o Tipo?',
    header: 'Confirmação',
    key: 'deletarTipo',
    acceptLabel: 'Sim',
    rejectLabel: 'Não',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.servico.deleteTipo(tipo).subscribe(
        resposta => {
          console.log(resposta);
          this.buscarTipo();
          this.messageService.add({severity:'success', summary: 'Tipo Deletado', detail: 'Tipo Deletado com Sucesso!'});
        }
      )
    },
    reject: () => {
      this.messageService.add({severity:'warn', summary: 'Processo Cancelado', detail:'Descartando execução'});
    }
  });


    
}
  

}
