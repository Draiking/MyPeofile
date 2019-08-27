export class AuthService {
    

    trueLogin(): boolean {
        const user = localStorage.getItem('login');
        const password = localStorage.getItem('password');
        return user && user.length > 0 && password && password.length  > 0;
    }

}
