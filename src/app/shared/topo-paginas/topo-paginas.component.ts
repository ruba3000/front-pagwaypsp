import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public redirecionaHome(): void {
    this.router.navigate(['/home']);
  }

}
