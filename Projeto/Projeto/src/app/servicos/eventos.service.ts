import { Eventos } from './../models/eventos.model';
import { EventosPageModule } from './../eventos/eventos.module';
import { Injectable, ɵConsole, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private JsonEventos = 'https://my-json-server.typicode.com/samaraduarte/teste/eventos';

  constructor(private http: HttpClient) { }

  async Get(){
    const resposta = await this.http.get(this.JsonEventos).toPromise();
    console.log(resposta);
    return resposta;
  }
}
