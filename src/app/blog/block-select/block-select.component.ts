import {Component, OnInit} from '@angular/core';
import {SectionsService} from '../sections.service';


@Component({
    selector: 'app-block-select',
    templateUrl: './block-select.component.html',
    styleUrls: ['./block-select.component.scss']
})
export class BlockSelectComponent implements OnInit {

    id: number;
    title: string;
    type: string;

    /*sections: Array<any> = [
        {id: 1, title: 'Angular', type: 'Angular'},
        {id: 2, title: 'JavaScript', type: 'JavaScript'},
        {id: 3, title: 'Показать все', type: 'all'},

    ];*/

    sections: any;

    constructor(private sectionsService: SectionsService) {
    }

    ngOnInit() {
       this.sections = this.sectionsService.getList();
           /* .subscribe((res) => {
                debugger;
                this.sections = res;
            });*/
    }


}
