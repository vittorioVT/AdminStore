import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
//services
import { BodyService } from './body.service';
import { AppRouterModule } from './app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
  ],
  providers: [BodyService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
