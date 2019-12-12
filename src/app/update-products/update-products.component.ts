import { Component, OnInit } from '@angular/core';
import { BodyService } from '../body.service';
import { MatTableDataSource } from '@angular/material';
import { BodyElements } from '../Interface/BodyElements';
import { MatDialog } from '@angular/material';
import { EditProductsComponent } from '../edit-products/edit-products.component';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Picture', 'Color', 'Size', 'Price', 'Filter', 'Actions'];
  dataSource;

  constructor(private service: BodyService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<BodyElements>(data as BodyElements[]);
    })
  }

  updateEntry(product) {
    console.log(product);
    this.dialog.open(EditProductsComponent, {
      data: {
        Id: product.Id,
        Name: product.Name,
        Description: product.Description,
        Picture: product.Picture,
        Color: product.Color,
        Size: product.Size,
        Price: product.Price,
        Comment: product.Comment
      }
    })
  }





}
