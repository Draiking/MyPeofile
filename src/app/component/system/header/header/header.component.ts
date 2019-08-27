import {
    AfterViewInit,
    Component,
    HostListener,
    OnInit,
    QueryList,
    ViewChild
} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    @ViewChild('bodyElement', {static: false}) elScroll;
    @ViewChild('head', {static: false}) elhead: any;
    @ViewChild('searchAnchor', {static: false}) searchAnchor: QueryList<any>;
    @ViewChild('toggleMenu', {static: false}) toggleMenu;
    @ViewChild('menu', {static: false}) menu;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.elhead && window.pageYOffset > 75) {
            this.elhead.nativeElement.classList.add('active-scroll');
        } else {
            this.elhead.nativeElement.classList.remove('active-scroll');
        }
    }

    constructor(private router: Router) {
    }


    ngOnInit() {
    }

    VisibleMob() {
        this.toggleMenu.nativeElement.classList.toggle('on');
        this.menu.nativeElement.classList.toggle('dBlock');
        console.log( this.toggleMenu);
    }

    searchSection(event, anchor) {
        event.preventDefault();
        if (this.router.url === '/main') {
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

    }

    ngAfterViewInit() {
    }
}
