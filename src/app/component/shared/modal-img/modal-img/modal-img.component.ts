import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CardsModel} from '../../cards/cards/cards.model';


@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.scss']
})
export class ModalImgComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<ModalImgComponent>,
      @Inject(MAT_DIALOG_DATA) public data: CardsModel) {}



  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
