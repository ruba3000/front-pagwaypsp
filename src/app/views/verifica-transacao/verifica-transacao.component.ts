import { Component, OnInit } from '@angular/core';
import { TopoPaginasComponent } from '../../shared/topo-paginas/topo-paginas.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DefautService } from '../../services/defaut-services/defaut.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormularioTransacaoComponent } from '../formulario-transacao/formulario-transacao.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-verifica-transacao',
  templateUrl: './verifica-transacao.component.html',
  styleUrls: ['./verifica-transacao.component.scss'],
  standalone: true,
  imports: [
    TopoPaginasComponent,
    TableModule,
    FormsModule,
    CommonModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule
  ],
  providers: [MessageService, DialogService]
})
export class VerificaTransacaoComponent implements OnInit {

  carregaTabela: boolean = false;
  colunas: any[] = [];
  dadosGrid: any[] = [];
  ref: DynamicDialogRef;

  constructor(private service: DefautService, private messageService: MessageService, public dialogService: DialogService, private router: Router) { }

  ngOnInit() {
    this.colunas = [
      {field: 'id', header: 'Id'},
      {field: 'amount', header: 'Quantidade'},
      {field: 'customerId', header: 'Id Cliente'},
      {field: 'description', header: 'Descrição'},
      {field: 'cardLastFour', header: 'Ultimos Digitos'},
      {field: 'createdAt', header: 'Dia Criado'},
    ];

    this.buscaDadosGrid();
  }

  private buscaDadosGrid(): void {
    this.service.defaultGet('transactions').subscribe({
      next: (res) => {
        
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao buscar transações!',
          key: 'verifica-transacao',
          life: 3000,
        });
      },
    })
  }

  public cadastraTransacao(): void {
    this.ref = this.dialogService.open(FormularioTransacaoComponent, {
      data: null,
      header: 'Cadastro Transação',
      width: window.innerWidth >= 720 ? '70%' : '100%',
      height: window.innerWidth >= 720 ? 'auto%' : '100%',
      styleClass: '', 
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((data: boolean) => {
      if (data) {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Transação criada',
          key: 'home',
          life: 3000,
        });
        this.buscaDadosGrid();
      }
    })
  }

  public voltarHome(): void {
    this.router.navigate(['home']);
  }

  
}
