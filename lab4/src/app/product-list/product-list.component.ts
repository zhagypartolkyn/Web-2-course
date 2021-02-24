import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products = products;
  ImagePath: string; 


 share() {
    window.alert('The product has been shared!');
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  

  
  ngOnInit() { 
  } 

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/