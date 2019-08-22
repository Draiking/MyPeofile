import {
    AfterViewInit,
    Component,
    HostListener,
    OnInit,
    QueryList,
    ViewChild
} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    @ViewChild('bodyElement', {static: false}) elScroll;
    @ViewChild('head', {static: false}) elhead: any;
    @ViewChild('searchAnchor', {static: false}) searchAnchor: QueryList<any>;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.elhead && window.pageYOffset > 75) {
            this.elhead.nativeElement.classList.add('active-scroll');
        } else {
            this.elhead.nativeElement.classList.remove('active-scroll');
        }
    }

    constructor() {
    }

    ngOnInit() {
    }

    searchSection(event, anchor) {
        event.preventDefault();

        const cordY = document.getElementById(anchor).offsetTop;

        if (window.pageYOffset < cordY) {
            for (let i = window.pageYOffset; i < cordY - 71; i += 1) {
                window.scrollTo(0, i);
            }
        } else {
            for (let i = window.pageYOffset; i > cordY - 71; i -= 1) {
                window.scrollTo(0, i);
            }
        }
    }

    ngAfterViewInit() {
    }
}
