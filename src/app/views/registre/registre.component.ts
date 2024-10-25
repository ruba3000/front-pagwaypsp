import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { DefautService } from '../../services/defaut-services/defaut.service';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss'],
  standalone: true,
  imports: [
    ToastModule,
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    ProgressSpinnerModule,
    InputTextModule
  ],
  providers: [
    MessageService  
  ]
})
export class RegistreComponent implements OnInit {

  spinnerActive: boolean = false;
  nome: string = null;
  isNomeEmpty: boolean = false;
  sobrenome: string = null;
  isSobrenomeEmpty: boolean = false;
  cpf: number = null;
  isCpfEmpty: boolean = false;
  login: string = null;
  isLoginEmpty: boolean = false;
  email: string = null;
  isEmailEmpty: boolean = false;
  senha: string = null;
  isSenhaEmpty: boolean = false;


  constructor(private service: DefautService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }


  public registrar(): void {
    if(!this.verificaCampos()){
      return;
    }
    
    let body = {
      first_name: this.nome,
      last_name: this.sobrenome,
      cpf: this.cpf,
      email: this.email,
      username: this.login,
      password: this.senha
    }
    this.spinnerActive = true;

    this.service.defaultPost('user', body).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Usuario criado com sucesso!',
          key: 'registro',
          life: 3000,
        });
        this.router.navigate(['']);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao criar o usuario',
          key: 'registro',
          life: 3000,
        });
        this.spinnerActive = false;
      },
    })
  }

  private verificaCampos(): boolean {
    let ehValido: boolean = true;
    if(this.nome == null){
      ehValido = false;
      this.isNomeEmpty = true;
    }

    if(this.sobrenome == null){
      ehValido = false;
      this.isSobrenomeEmpty = true;
    }

    if(this.cpf == null){
      ehValido = false;
      this.isCpfEmpty = true;
    }

    if(this.login == null){
      ehValido = false;
      this.isLoginEmpty = true;
    }

    if(this.email == null){
      ehValido = false;
      this.isEmailEmpty = true;
    }

    if(this.senha == null){
      ehValido = false;
      this.isSenhaEmpty = true;
    }

    return ehValido;
  }
}
