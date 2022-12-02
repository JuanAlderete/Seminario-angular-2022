import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinhosAboutComponent } from './linhos-about/linhos-about.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoesHomeComponent } from './shoes-home/shoes-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'shoes', pathMatch: 'full'},
  {path: 'shoes', component: ShoesHomeComponent},
  {path: 'about', component: LinhosAboutComponent},
  {path: 'producto', component: ProductDetailsComponent},
  {path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
