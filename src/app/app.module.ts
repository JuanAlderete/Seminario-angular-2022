import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { HeroCarrouselComponent } from './hero-carrousel/hero-carrousel.component';
import { LinhosAboutComponent } from './linhos-about/linhos-about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShoesHomeComponent } from './shoes-home/shoes-home.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoesListComponent,
    HeroCarrouselComponent,
    LinhosAboutComponent,
    ProductDetailsComponent,
    CartComponent,
    ShoesHomeComponent,
    InputNumberComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
