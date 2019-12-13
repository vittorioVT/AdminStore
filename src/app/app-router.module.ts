import { RouterModule, Routes } from '@angular/router';
import { NewProductsComponent } from './new-products/new-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';


//component
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';

//route
const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'body', component: BodyComponent },
  { path: 'new-products', component: NewProductsComponent },
  { path: 'update', component: UpdateProductsComponent },
  { path: 'delete', component: DeleteProductsComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
