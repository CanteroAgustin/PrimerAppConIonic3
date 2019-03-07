import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PaginaUnoPage } from '../pages/pagina-uno/pagina-uno';
import { PaginaDosPage } from '../pages/pagina-dos/pagina-dos';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { NetworkProvider } from '../providers/network/network';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaginaUnoPage,
    PaginaDosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaginaUnoPage,
    PaginaDosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    NetworkProvider,
    Network
  ]
})
export class AppModule {}
