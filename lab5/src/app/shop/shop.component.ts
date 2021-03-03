import { Component, Input, OnInit } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = products;
  ImagePath: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
