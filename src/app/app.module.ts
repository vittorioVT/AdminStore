import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewProductsComponent } from './new-products/new-products.component';

//services
import { BodyService } from './body.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

//forms
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    NewProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,

    //material design
    BrowserAnimationsModule,
    MatButtonModule, MatTableModule,

    //forms
    ReactiveFormsModule,


  ],
  providers: [BodyService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
