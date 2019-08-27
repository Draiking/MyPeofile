import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';


import {ModalImgComponent} from '../../modal-img/modal-img/modal-img.component';
import {CardsModel} from './cards.model';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

    @Input() card: CardsModel;


    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {

    }


    openDialog(): void {
        const dialogRef = this.dialog.open(ModalImgComponent, {
            width: '80vw',
            data: this.card
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }



}
