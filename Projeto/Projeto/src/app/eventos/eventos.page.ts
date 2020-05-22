import { EventosService } from './../servicos/eventos.service';
import { Eventos } from './../models/eventos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  eventos: Eventos;
  arrayEventos: Eventos[] = [];
  resposta: any;

  constructor(private eventosService: EventosService) { }

  async ngOnInit() {
    this.resposta = await this.eventosService.Get();
    this.arrayEventos = this.resposta;
  }

}
