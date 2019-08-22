import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login: string;
    password: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    loginChange(value) {

    }

    passwordChange(value) {

    }

    send() {
        if ( this.login.length <= 3 && this.password.length <= 6 && this.login !== 'Admin' && this.password !== 'Rfhfgtczy67') {
            alert('Не правильный логин или пароль.');
        } else  {
            localStorage.setItem('login', this.login);
            localStorage.setItem('password', this.password);
            this.router.navigateByUrl('/main');
        }
    }

}
