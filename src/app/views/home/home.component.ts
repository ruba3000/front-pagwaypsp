import { Component, OnInit } from '@angular/core';
import { TopoPaginasComponent } from '../../shared/topo-paginas/topo-paginas.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    TopoPaginasComponent
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public enviaTransacao(): void {
    this.router.navigate(['/verificaTransacao']);
  }
  

}
