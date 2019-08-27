import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {UserService} from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login: string;
    password: string;

    constructor(
        private router: Router,
        private userService: UserService
    ) {
    }

    ngOnInit() {
    }


    async send() {
        const user = await this.userService.getUser(this.login, this.password);
        if (user) {
            localStorage.setItem('login', this.login);
            localStorage.setItem('password', this.password);
            this.router.navigate(['/admin']);
        } else  {
            alert('Не правильный логин или пароль.');
        }
    }

    logout() {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        this.router.navigate(['/main']);
    }

}
