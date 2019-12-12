import { Component, OnInit } from '@angular/core';
import { BodyService } from '../body.service';
import { MatTableDataSource } from '@angular/material';
import { BodyElements } from '../Interface/BodyElements';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Picture', 'Color', 'Size', 'Price', 'Filter', 'Actions'];
  dataSource;

  constructor(private service: BodyService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<BodyElements>(data as BodyElements[]);

    })

  }


}
