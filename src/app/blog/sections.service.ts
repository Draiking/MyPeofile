import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SectionsService {

    constructor(private http: HttpClient) {
    }

    getList(): Observable<any> {
        return this.http.get('assets/db.json')
            .pipe(map( (item: any) => {
                return item.list;
            }));

       /* return this.http.get('assets/db.json').toPromise()
            .then((res: any) => {
                return res.list;
            });*/
    }



}
