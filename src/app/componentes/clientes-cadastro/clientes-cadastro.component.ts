import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/clientes';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

  cliente: Cliente;
  id: number;
  statusBotao: string;

  constructor(private servico: DigivoxapiService, private activeRouter: ActivatedRoute, private messageService: MessageService) { 
    this.cliente = new Cliente();  
    this.statusBotao = "Cadastrar"
  }

  ngOnInit(): void {    
    let params : Observable<Params> = this.activeRouter.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.statusBotao = "Atualizar"
        this.servico.buscarClienteById(this.id).subscribe(
          resposta => {
            this.cliente = resposta;            
          },erroResposta => this.cliente = new Cliente() 
        )
      }else{

      }
     
    })
  }

  cadastrarClientes(){
    this.servico.salvarCliente(this.cliente).subscribe(
      resposta => {
        this.cliente = resposta;
        this.messageService.add({severity:'success', summary: 'Cliente Cadastrado/Atualizado', detail: 'Cliente Cadastrado/Atualizado com Sucesso!'});
      }
    )    
  }
}
