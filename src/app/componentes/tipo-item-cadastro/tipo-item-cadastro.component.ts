import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Params } from '@angular/router';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { TipoItem } from './../tipo-item-lista/tipoItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-item-cadastro',
  templateUrl: './tipo-item-cadastro.component.html',
  styleUrls: ['./tipo-item-cadastro.component.css']
})
export class TipoItemCadastroComponent implements OnInit {

  tipoItem: TipoItem;
  id: number;
  statusBotao: string;

  constructor(private servico: DigivoxapiService, private activeRouter: ActivatedRoute, private messageService: MessageService) { 
    this.tipoItem = new TipoItem();
    this.statusBotao = "Cadastrar"
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activeRouter.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.statusBotao = "Atualizar"
        this.servico.buscarTipoItemById(this.id).subscribe(
          resposta => {
            this.tipoItem = resposta;            
          },erroResposta => this.tipoItem = new TipoItem() 
        )
      }else{

      }
     
    })
  }


  cadastrarTipoItem(){
    this.servico.salvarTipoItem(this.tipoItem).subscribe(
      resposta => {
        this.tipoItem = resposta;
        this.messageService.add({severity:'success', summary: 'Tipo Cadastrado/Atualizado', detail: 'Tipo Item Cadastrado/Atualizado com Sucesso!'});
      }
    )
  }

}
