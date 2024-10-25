import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistreComponent } from './views/registre/registre.component';
import { VerificaTransacaoComponent } from './views/verifica-transacao/verifica-transacao.component';
import { FormularioClienteComponent } from './views/formulario-cliente/formulario-cliente.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'verifica-transacao', component: VerificaTransacaoComponent
    },
    {
        path: 'registre', component: RegistreComponent
    }
];
