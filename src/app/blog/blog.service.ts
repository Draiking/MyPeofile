import {Injectable} from '@angular/core';
import {PostModel} from './block-list/post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BlogService {


    setType = new Subject();

    constructor(private http: HttpClient) {
    }


    getPosts(): Promise<any> {
        return  this.http.get('assets/db.json').toPromise()
            .then((res: any) => {
                return res.posts;
            });
    }


    getPostById(id): Promise<PostModel> {
        return  this.http.get('assets/db.json').toPromise()
            .then((res: any) => {
                return res.posts.find((post: any) => {
                    return post.id === id;
                });

            });
    }

}
