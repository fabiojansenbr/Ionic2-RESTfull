import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NotaInterface } from '../../interfaces/notaInterface';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Webservice {
  private url: string = 'http://devmedianotesapi.azurewebsites.net/';
  private urlPrevisao: string = 'http://api.openweathermap.org/data/2.5/weather?APPID=efa1b3d658a3cf2c1d66b28b627aaa28&lang=pt&units=metric&q=';
  private headers = new Headers({ 'Accept': 'application/json' });

  constructor(public http: Http) {
    console.log('Hello WebserviceProvider Provider');
  }

  addNota(nota: NotaInterface) {
    return this.http.post(this.url + 'api/notes', nota, { headers: this.headers })
      .toPromise()
      .then(res => res.json());
  }
  getNotas(nota: NotaInterface) {
    return this.http.get(this.url + 'api/notes')
      .toPromise()
      .then(res => res.json());
  }
  editNota(nota: NotaInterface) {
    return this.http.put(this.url + 'api/notes/' + nota.Id, nota, { headers: this.headers })
      .toPromise()
      .then(res => res.json());
  }
  deleteNota(nota: NotaInterface) {
    return this.http.delete(this.url + 'api/notes/' + nota.Id, { headers: this.headers })
      .toPromise()
      .then(res => res.json());
  }
  getPrevisao(cidade: string) {
    return this.http.get(this.urlPrevisao + cidade)
      .toPromise()
      .then(res => res.json());
  }
}
