import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotasPage } from '../pages/notas/notas';
import { PrevisaoPage } from '../pages/previsao/previsao';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Webservice } from '../providers/webservice/webservice';

@NgModule({
  declarations: [
    NotasPage,
    DetalhePage,
    MyApp,
    PrevisaoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NotasPage,
    DetalhePage,
    MyApp,
    PrevisaoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Webservice
  ]
})
export class AppModule {}
