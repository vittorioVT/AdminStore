import { Component, OnInit } from '@angular/core';
import { BodyService } from '../body.service';
import { MatTableDataSource } from '@angular/material';
import { BodyElements } from '../Interface/BodyElements';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

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

}
