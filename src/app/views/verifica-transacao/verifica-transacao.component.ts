import { Component, OnInit } from '@angular/core';
import { TopoPaginasComponent } from '../../shared/topo-paginas/topo-paginas.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verifica-transacao',
  templateUrl: './verifica-transacao.component.html',
  styleUrls: ['./verifica-transacao.component.scss'],
  standalone: true,
  imports: [
    TopoPaginasComponent,
    TableModule,
    FormsModule,
    CommonModule
  ]
})
export class VerificaTransacaoComponent implements OnInit {

  carregaTabela: boolean = false;
  colunas: any[] = [];
  dadosGrid: any[] = [];

  constructor() { }

  ngOnInit() {
    this.colunas = [
      {field: 'id', header: 'Id'},
      {field: 'amount', header: 'Quantidade'},
      {field: 'customerId', header: 'Id Cliente'},
      {field: 'description', header: 'Descrição'},
      {field: 'cardLastFour', header: 'Ultimos Digitos'},
      {field: 'createdAt', header: 'Dia Criado'},
    ];
  }

  public editaLinha(rowData: any): void {

  }

  public deletaLinha(rowData: any): void {

  }

}
