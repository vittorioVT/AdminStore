import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../Interface/Type';
import { BodyService } from '../body.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent {
  types: Type[] = [
    { value: true, display: 'є' },
    { value: false, display: 'немає' }
  ];


  constructor(private service: BodyService,
              private router: Router) { }

  productForm = new FormGroup({
   // id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  })

  onSubmit() {
    this.service.createProduct(this.productForm.value).subscribe(
      (data) => {
        console.log('Data - ', data);
        this.router.navigate(['/']);
      })
  }

  
}
