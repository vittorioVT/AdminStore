import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent {

  constructor() { }
  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    picture: new FormControl(''),
    color: new FormControl(''),
    size: new FormControl(''),
    price: new FormControl(''),
    filter: new FormControl('')
  })


  
}
