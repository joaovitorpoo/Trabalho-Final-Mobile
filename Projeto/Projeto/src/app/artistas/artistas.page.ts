import { Component, OnInit } from '@angular/core';
import { EventosService } from './../servicos/eventos.service';
import { Eventos } from './../models/eventos.model';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {

  eventos: Eventos;
  arrayEventos: Eventos[] = [];
  resposta: any;

  constructor(private eventosService: EventosService) { }

  async ngOnInit() {
    this.resposta = await this.eventosService.Get();
    this.arrayEventos = this.resposta;
  }

}
