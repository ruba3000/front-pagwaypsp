import { Component, OnInit } from '@angular/core';
import { TopoPaginasComponent } from '../../shared/topo-paginas/topo-paginas.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { DefautService } from '../../services/defaut-services/defaut.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-verificar-balanco',
  templateUrl: './verificar-balanco.component.html',
  styleUrls: ['./verificar-balanco.component.scss'],
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
  providers: [MessageService]
})
export class VerificarBalancoComponent implements OnInit {

  carregaTabela: boolean = false;
  colunas: any[] = [];
  dadosGrid: any[] = [];
  idCustomer: number = null;
  isIdCustomerEmpty: boolean = false;

  constructor(private service: DefautService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.colunas = [
      {field: 'customerId', header: 'Id Cliente'},
      {field: 'status', header: 'Status'},
      {field: 'amount', header: 'Quantidade'}
    ];
  }

  private buscaDadosGrid(): void {

    if(!this.verificaFiltrosObrigatorios()){
      return;
    }

    this.service.getBalanco(`balance/${this.idCustomer}`).subscribe({
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

  private verificaFiltrosObrigatorios(): boolean {
    let ehValido: boolean = true;
    
    if(this.idCustomer == null){
      this.isIdCustomerEmpty = true;
      ehValido = false;
    }

    return ehValido;
  }

  public voltarHome(): void {
    this.router.navigate(['home']);
  }
  
  public pesquisar(): void {
    this.buscaDadosGrid();
  }

}
