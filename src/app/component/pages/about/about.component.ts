import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    isVisible = false;

    constructor() {
    }

    ngOnInit() {

    }

    private toggleFilterOpen(openFilter: boolean) {
        this.isVisible = openFilter;
    }

    openFilter() {
        this.toggleFilterOpen(true);
    }

    closeModal() {
        this.toggleFilterOpen(false);
    }
}



