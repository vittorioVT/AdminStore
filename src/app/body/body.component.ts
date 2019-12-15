import { Component, OnInit } from '@angular/core';
import { BodyService } from '../body.service';
import { MatTableDataSource } from '@angular/material';
import { BodyElements } from '../Interface/BodyElements';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Picture', 'Color', 'Size', 'Price', 'Filter'];
  dataSource;
  constructor(private service: BodyService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      //console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<BodyElements>(data as BodyElements[]);

    })

  }

}
