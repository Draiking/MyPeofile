import {
    AfterViewInit,
    Component,
    EventEmitter,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

    @ViewChild('bodyElement', {static: false}) body;
    @ViewChild('myMail', {static: false}) myMail;

    @Output() closeModal = new EventEmitter();

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.body = document.body;
        this.body.style.overflow = 'hidden';
    }

    onCloseModal() {
        this.closeModal.emit();
        this.body.style.overflow = 'visible';
    }

    copyText(el) {
        const text = el.outerText;
        this.copyTextToClipboard(text);
    }

    copyNumber(num) {
        const text = num.outerText;
        this.copyTextToClipboard(text);
    }

    copyTextToClipboard(text) {
        const txtArea = document.createElement('textarea');
        txtArea.id = 'txt';
        txtArea.style.position = 'fixed';
        txtArea.style.top = '0';
        txtArea.style.left = '0';
        txtArea.style.opacity = '0';
        txtArea.value = text;
        document.body.appendChild(txtArea);
        txtArea.select();
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            if (successful) {
                return true;
            }
        } catch (err) {
        } finally {
            document.body.removeChild(txtArea);
        }
        return false;
    }

}
