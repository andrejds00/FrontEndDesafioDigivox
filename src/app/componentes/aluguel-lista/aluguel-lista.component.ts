import { DatePipe } from '@angular/common';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Aluguel } from './aluguel';

@Component({
  selector: 'app-aluguel-lista',
  templateUrl: './aluguel-lista.component.html',
  styleUrls: ['./aluguel-lista.component.css']
})
export class AluguelListaComponent implements OnInit {

  alugueis: Aluguel[];
  displayModal: boolean;
  dataDevolucao: string;
  aluguelSelecionado: Aluguel;

  constructor(private servico: DigivoxapiService, private confirmationService: ConfirmationService, private messageService: MessageService, private datePipe: DatePipe) { 
    this.aluguelSelecionado = new Aluguel();
  }

  ngOnInit(): void {
    this.buscarAlugueis();  
  }

buscarAlugueis(){
  this.servico.buscarAlugueis().subscribe(
    resposta => {
      this.alugueis = resposta
    }
    
  )
}

buscarAlugueisAtivos(){
  this.servico.buscarAlugueisAtivos().subscribe(
    resposta => {
      this.alugueis = resposta
    }
    
  )
}

buscarAlugueisDevolvidos(){
  this.servico.buscarAlugueisDevolvidos().subscribe(
    resposta => {
      this.alugueis = resposta
    }
    
  )
}

showModalDialog(aluguel: Aluguel) { 
  this.displayModal = true; 
  this.aluguelSelecionado = aluguel;
}

confirmarDevolucao(){
  //this.aluguelSelecionado.dataDevolucao = this.datePipe.transform(this.aluguelSelecionado.dataDevolucao, 'dd/MM/yyyy');
  this.aluguelSelecionado.status = "DEVOLVIDO";
 this.servico.atualizarAluguel(this.aluguelSelecionado).subscribe(
   resposta => {
    this.displayModal = false; 
    this.messageService.add({severity:'success', summary: 'Devolução Realizada', detail: 'Devolução Realizada com Sucesso!'});
   }
 )
 this.buscarAlugueis()
 
}

}
