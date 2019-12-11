import { RouterModule, Routes } from '@angular/router';
import { NewProductsComponent } from './new-products/new-products.component';

//component
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';

//route
const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'body', component: BodyComponent },
  { path: 'new-products', component: NewProductsComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
