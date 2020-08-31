import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './clientes';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private servico: DigivoxapiService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarClientes();
  }


  buscarClientes(){
     this.servico.buscarClientes().subscribe(
      resposta => {this.clientes = resposta
      console.log(this.clientes);
      }
     );
       
     
  }

  deletarCliente(cliente: Cliente){
    

    this.confirmationService.confirm({
      message: 'Deseja Realmente excluir o Cliente?',
      header: 'Confirmação',
      key: 'deletarCliente',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servico.deleteCliente(cliente).subscribe(
          resposta => {
            console.log(resposta);
            this.buscarClientes();
            this.messageService.add({severity:'success', summary: 'Cliente Deletado', detail: 'Cliente Deletado com Sucesso!'});
          }
        )
      },
      reject: () => {
        this.messageService.add({severity:'warn', summary: 'Processo Cancelado', detail:'Descartando execução'});
      }
    });


      
  }

  

}
