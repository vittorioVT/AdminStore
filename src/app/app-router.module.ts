import { RouterModule, Routes } from '@angular/router';
import { NewProductsComponent } from './new-products/new-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


//component
import { BodyComponent } from './body/body.component';
import { NgModule, DebugElement } from '@angular/core';

//route
const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'body', component: BodyComponent },
  { path: 'new-products', component: NewProductsComponent },
  { path: 'update', component: UpdateProductsComponent },
  { path: 'delete-products', component: DeleteProductsComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
