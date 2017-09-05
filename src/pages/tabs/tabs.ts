import { Component } from '@angular/core';

import { PrevisaoPage } from '../previsao/previsao';
import { NotasPage } from '../notas/notas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotasPage;
  tab2Root = PrevisaoPage;

  constructor() {

  }
}
