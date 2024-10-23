import { Component, OnInit } from '@angular/core';
import { TopoPaginasComponent } from '../../shared/topo-paginas/topo-paginas.component';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-verifica-transacao',
  templateUrl: './verifica-transacao.component.html',
  styleUrls: ['./verifica-transacao.component.scss'],
  standalone: true,
  imports: [
    TopoPaginasComponent,
    TableModule
  ]
})
export class VerificaTransacaoComponent implements OnInit {

  carregaTabela: boolean = false;
  colunas: any[] = [];
  dadosGrid: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  public editaLinha(rowData: any): void {

  }

  public deletaLinha(rowData: any): void {

  }

}
