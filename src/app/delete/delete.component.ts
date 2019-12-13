import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BodyService } from '../body.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute,
    private service: BodyService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getProduct(this.id).subscribe((data) => {
      console.log(data);
    })
  }
}
