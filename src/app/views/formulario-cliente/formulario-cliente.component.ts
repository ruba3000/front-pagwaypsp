import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DefautService } from '../../services/defaut-services/defaut.service';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss'],
  standalone: true,
  imports: [
    DynamicDialogModule, 
    InputTextModule, 
    FloatLabelModule, 
    FormsModule, 
    ButtonModule,
    ToastModule,
    InputNumberModule
  ],
  providers: [MessageService],
})
export class FormularioClienteComponent implements OnInit {

  name: string = null;
  cpf: number = null;
  isNameEmpty: boolean = false;
  isCpfEmpty: boolean = false;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef, private messageService: MessageService, private service: DefautService) { }

  ngOnInit() {
  }


  public salvarDados(): void {
    if(!this.verificaCampos()){
      return;
    }
    
    let body: any = {
      name: this.name,
      cpf: this.cpf,
      status: 'active',
      transactions: [],
      payable: []
    }

    this.service.defaultPost('customer', body).subscribe({
      next: (res) => {
        this.ref.close(true);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao criar o usuario',
          key: 'registro',
          life: 3000,
        });
        
      },
    })

  }

  private verificaCampos(): boolean {
    let ehValido: boolean = true;

    if(this.name == null){
      this.isNameEmpty == true;
      ehValido = false;
    }

    if(this.cpf == null){
      this.isCpfEmpty == true;
      ehValido = false;
    }

    return ehValido;
  }

  public sairModal(): void {
    this.ref.close(false);
  }
}
