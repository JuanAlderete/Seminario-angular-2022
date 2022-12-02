import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoesCartService } from '../shoes-cart.service';
import { Shoe } from '../shoes-list/Shoe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartList$: Observable<Shoe[]>;

  // cartList: Shoe [] = [];

  constructor(private cart: ShoesCartService) {
    // cart.cartList.subscribe(c => this.cartList = c)
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
