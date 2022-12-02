import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { Shoe } from './shoes-list/Shoe';

const URL = 'https://638a6824c5356b25a21aa465.mockapi.io/products';

@Injectable({
  providedIn: 'root'
})

export class ShoeDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Shoe[]> {
    //fetch('url', {method: 'GET'})

  return this.http.get<Shoe[]>(URL)
            .pipe(
              tap((shoes: Shoe[]) => shoes.forEach(shoe => shoe.quantity = 0))
            );
  }

}
