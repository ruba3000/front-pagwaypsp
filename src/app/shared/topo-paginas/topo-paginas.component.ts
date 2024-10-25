import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DefautService } from '../../services/defaut-services/defaut.service';

@Component({
  selector: 'app-topo-paginas',
  templateUrl: './topo-paginas.component.html',
  styleUrls: ['./topo-paginas.component.scss'],
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule
  ]
})
export class TopoPaginasComponent implements OnInit {

  constructor(private router: Router, private service: DefautService) { }

  ngOnInit() {
  }

  public redirecionaHome(): void {
    this.router.navigate(['/home']);
  }

  public sairPlataforma(): void {
    this.service.defaultGet('/auth/logout').subscribe({
      next: (res) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        
      },
    })
  }

}
