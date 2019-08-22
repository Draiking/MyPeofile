import {
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import {CardsModel} from '../../../shared/cards/cards/cards.model';




@Component({
    selector: 'app-working',
    templateUrl: './working.component.html',
    styleUrls: ['./working.component.scss']
})


export class WorkingComponent implements OnInit {

    @ViewChild('img', {static: false}) img;
    @ViewChild('cardsDiv', {static: false}) cardsDiv;

    items: Array<CardsModel> = [
        {id: 1, imgUrl: './assets/img/table-1.png', description: 'Первый проект, сайт магазина мебели. В проекте присутствует каталог,' +
                ' яндекс карты, модальные окна, видео из ютуба', title: 'Стол и Стулья', subtitle: 'Сайт-1'},
        {id: 2, imgUrl: './assets/img/help.png', description: 'Второй проект сайта по магазину электро товаров. В проекте присутвует' +
                ' каталог, фильтр, модальные окна, новости, корзина', title: 'Нева-электро', subtitle: 'Сайт-2'},
    ];

    constructor() {
    }

    ngOnInit() {
    }



}
