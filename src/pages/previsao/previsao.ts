import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Webservice } from '../../providers/webservice/webservice';
import { NotaInterface } from '../../interfaces/notaInterface';
import { NotasPage } from '../notas/notas';

/**
 * Generated class for the PrevisaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previsao',
  templateUrl: 'previsao.html',
})
export class PrevisaoPage {
  public cidade: string = 'jandira';
  public notaPrevisao: NotaInterface = { Title: '', Body: '' }

  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice: Webservice) {
  }

  ionViewDidLoad() {
    this.buscaPrevisao();
  }
  buscaPrevisao() {
    this.webservice.getPrevisao(this.cidade).then(data => {
      this.cidade = '';
      this.notaPrevisao.Title = 'Previsão em ' + data.name;
      this.notaPrevisao.Body = 'Temperatura em ' + data.main.temp + ' e ' + data.weather[0].description + '. Em ' + this.getData();
    });
  }

  getData() {
    let data: any = new Date();
    let dd: any = data.getDate();
    let mm: any = data.getMonth() + 1;
    let yyyy: any = data.getFullYear();
    let h: any = data.getHours();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy + ' - ' + h + 'h';

  }
  salvaNota() {
    this.navCtrl.push(NotasPage, { nota: this.notaPrevisao });
  }
}
