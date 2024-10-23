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


  constructor(private router: Router) { }

  ngOnInit() {
  }

  public realizarLogin(): void {
    this.router.navigate(['/home']);
  }

  public redirecionaRegistar(): void {
    this.router.navigate(['/registre']);
  }

}
