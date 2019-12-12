import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BodyService } from '../body.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProductsComponent>,
    @Inject(MAT_DIALOG_DATA) { Name, Description, Picture, Color, Size, Price, Comment, Id },
    private service: BodyService) {
    this.id = Id;
    this.form = fb.group({
      name: [Name, Validators.required],
      description: [Description, Validators.required],
      picture: [Picture, Validators.required],
      color: [Color, Validators.required],
      size: [Size, Validators.required],
      price: [Price, Validators.required],
      comment: [Comment, Validators.required]
    });
  }

  ngOnInit() {
  }

  save() {
    console.log('save clicked');
    this.service.updateProduct(this.id, this.form.value).subscribe(
      (data) => {
        console.log('Data: ', data);
      })
  }

  close() {
    this.dialogRef.close();
  }


}
