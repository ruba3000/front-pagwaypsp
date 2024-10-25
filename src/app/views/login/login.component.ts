import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { DefautService } from '../../services/defaut-services/defaut.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    PasswordModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {


  email: string = '';

  senha: string = '';

  isEmailEmpty: boolean = false;

  isSenhaEmpty: boolean = false;

  spinnerActive: boolean = false;

  username: string = '';


  constructor(private router: Router, private service: DefautService, private messageService: MessageService) { }

  ngOnInit() {
  }

  public realizarLogin(): void {
    let body: any = {
      username: this.username
    }
    this.spinnerActive = true;
    this.service.postToken('auth/login', body).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
        
      },
      error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao logar',
            key: 'login',
            life: 3000,
          });
        this.spinnerActive = false;
      },
    })
  }

  public redirecionaRegistar(): void {
    this.router.navigate(['/registre']);
  }

}
