import { RouterModule, Routes } from '@angular/router';

//component
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';

//route
const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'body', component: BodyComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
