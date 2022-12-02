import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ShoesCartService } from '../shoes-cart.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor(private cart: ShoesCartService) { }

  @Input() 
  quantity: number;

  @Input() 
  max:number;

  @Output() 
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
      console.log(this.quantity)
    }
  }

  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event:any): void {
    // console.log(event);
    this.quantityChange.emit(this.quantity);
  }

}
