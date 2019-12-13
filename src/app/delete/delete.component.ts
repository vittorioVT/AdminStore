import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BodyService } from '../body.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  product = {
    name: '',
    description: '',
    picture: '',
    color: '',
    size: '',
    price: 0,
    comment:''
  }


  id;
  constructor(private route: ActivatedRoute,
    private service: BodyService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getProduct(this.id).subscribe((data:any) => {
      console.log(data);
      this.product.name = data.Name;
      this.product.description = data.Description;
      this.product.picture = data.Picture;
      this.product.color = data.Color;
      this.product.size = data.Size;
      this.product.price = data.Price;
      this.product.comment = data.Comment;
    })
  }

  cancel() {
    this.router.navigate(['/delete-products']);
  }

  confirm() {
    this.service.deleteProduct(this.id).subscribe((data) => {
      this.router.navigate(['/delete-products']);
    })

  }

}
