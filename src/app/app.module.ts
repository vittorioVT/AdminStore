import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { DeleteComponent } from './delete/delete.component';


//services
import { BodyService } from './body.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatTableModule,
  MatInputModule, MatCardModule,
  MatSelectModule, MatToolbarModule,
  MatDialogModule, MatListModule,
 } from '@angular/material';


//forms
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    NewProductsComponent,
    UpdateProductsComponent,
    EditProductsComponent,
    DeleteProductsComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    
    //material design
    BrowserAnimationsModule,
    MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule,
    MatSelectModule, MatToolbarModule,
    MatDialogModule, MatListModule,

    //forms
    ReactiveFormsModule,


  ],
  entryComponents: [EditProductsComponent],
  providers: [BodyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
