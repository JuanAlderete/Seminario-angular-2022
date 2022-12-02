import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shoe } from './shoes-list/Shoe';

@Injectable({
  providedIn: 'root'
})

export class ShoesCartService {

  // Esto maneja la logica del carrito

  private _cartList: Shoe[] = [];

  cartList: BehaviorSubject<Shoe[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(shoe: Shoe) {
    let item: Shoe = this._cartList.find((v1) => v1.style == shoe.style && v1.name == shoe.name)!;
    if (!item) {
      this._cartList.push({... shoe}); //como no lo encontre, clono el objeto y hago el push
    }
    else {
      item.quantity += shoe.quantity; //si no lo encuentro suma la cantidad
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); //al BehaviorSubject que notifique que hubo un cambio en su variable privada. equivale al emitt de eventos
  }

}
