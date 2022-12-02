import { Component, Input, OnInit, Output} from '@angular/core';
import { ShoesCartService } from '../shoes-cart.service';
import { Shoe } from '../shoes-list/Shoe';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private cart: ShoesCartService) { }

  @Input() shoes: Shoe;

  @Output() shoess: Shoe;
  
  ngOnInit(): void {
  }

  
}
