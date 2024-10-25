import { Component, OnInit } from '@angular/core';
import { TopoPaginasComponent } from '../../shared/topo-paginas/topo-paginas.component';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormularioClienteComponent } from '../formulario-cliente/formulario-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    TopoPaginasComponent,
    DynamicDialogModule,
    CommonModule,
    ToastModule
  ],
  providers: [DialogService, MessageService]
})
export class HomeComponent implements OnInit {

  ref: DynamicDialogRef;

  constructor(private router: Router, public dialogService: DialogService, private messageService: MessageService) { }

  ngOnInit() {
  }

  public enviaTransacao(): void {
    this.router.navigate(['/verifica-transacao']);
  }

  public enviaCadastroCliente(): void {
    this.ref = this.dialogService.open(FormularioClienteComponent, {
      data: null,
      header: 'Cadastro Clientes',
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
          detail: 'Cliente cadastrado',
          key: 'home',
          life: 3000,
        });
      }
    })
  }
  

}
