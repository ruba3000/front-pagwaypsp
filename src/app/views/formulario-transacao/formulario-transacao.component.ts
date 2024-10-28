import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DefautService } from '../../services/defaut-services/defaut.service';

@Component({
  selector: 'app-formulario-transacao',
  templateUrl: './formulario-transacao.component.html',
  styleUrls: ['./formulario-transacao.component.scss'],
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
  standalone: true
})
export class FormularioTransacaoComponent implements OnInit {

  customerId: number = null;
  amount: number = null;
  description: string = null;
  cardNumber: string = null;
  cardholderName: string = null;
  cardExpirationDate: string = null;
  cvv: string = null;
  isIdClienteEmpty: boolean = false;
  isAumontEmpty: boolean = false;
  isDescriptionEmpty: boolean = false;
  isCardNumberEmpty: boolean = false;
  isCardHolderNameEmpty: boolean = false;
  isCardExpirationDateEmpty: boolean = false;
  isCvvEmpty: boolean = false;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef, private messageService: MessageService, private service: DefautService) { }

  ngOnInit() {
  }

  public salvarDados(): void {
    if(!this.verificaCampos()){
      return;
    }
    
    let body = {
      customerId: this.customerId,
      amount: this.amount,
      description: this.description,
      cardNumber: this.cardNumber,
      cardholderName: this.cardholderName,
      cardExpirationDate: this.cardExpirationDate,
      cvv: this.cvv
    };

    this.service.defaultPost('transaction', body).subscribe({
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
    });
  }

  private verificaCampos(): boolean {
    let ehValido: boolean = true;

    if(this.customerId == null){
      this.isIdClienteEmpty = true;
      ehValido = false;
    }

    if(this.amount == null){
      this.isAumontEmpty = true;
      ehValido = false;
    }

    if(this.description == null){
      this.isDescriptionEmpty = true;
      ehValido = false;
    }

    if(this.cardNumber == null){
      this.isCardNumberEmpty = true;
      ehValido = false;
    }

    if(this.cardholderName == null){
      this.isCardHolderNameEmpty = true;
      ehValido = false;
    }

    if(this.cardExpirationDate == null){
      this.isCardExpirationDateEmpty = true;
      ehValido = false;
    }

    if(this.cvv == null){
      this.isCvvEmpty = true;
      ehValido = false;
    }

    return ehValido;
  }

  public sairModal(): void {

  }

}
