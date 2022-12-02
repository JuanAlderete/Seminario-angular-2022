import { Component, OnInit } from '@angular/core';
import { ShoeDataService } from '../shoe-data.service';
import { ShoesCartService } from '../shoes-cart.service';
import { Shoe } from './Shoe';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})

export class ShoesListComponent implements OnInit {

  shoes: Shoe[] = [
    // {
    //   name: 'Airmax',
    //   style: 'Casual',
    //   price: 180,
    //   stock: 5,
    //   image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/318eff19-a95e-466a-a34b-a7ecfc2154df/air-max-dawn-se-zapatillas-BD23jR.png',
    //   quantity: 0,
    // },
    // {
    //   name: 'Jordan I',
    //   style: 'Casual',
    //   price: 200,
    //   stock: 10,
    //   image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/8f6ba257-225e-498f-ae39-ec5ae5503ff6/air-jordan-1-retro-high-og.jpg',
    //   quantity: 0,
    // },
    // {
    //   name: 'Run Falcon 6',
    //   style: 'Sport',
    //   price: 180,
    //   stock: 0,
    //   image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/18f91dfccb2a4539ba9cae89000b44eb_9366/Zapatillas_Galaxy_6_Azul_GW4143_04_standard.jpg',
    //   quantity: 0,
    // },
  ];

  constructor(
    private cart: ShoesCartService,
    private shoeService: ShoeDataService) { 

  }

  ngOnInit(): void {
    this.shoeService.getAll()
    .subscribe(shoes => this.shoes = shoes)
  }

  addToCart(shoe: Shoe): void {
    this.cart.addToCart(shoe);
    shoe.stock -= shoe.quantity;
    shoe.quantity = 0;
  }

}
