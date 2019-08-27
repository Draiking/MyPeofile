import {Component, OnInit} from '@angular/core';
import {PostModel} from './post.model';
import {Router} from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
    selector: 'app-block-list',
    templateUrl: './block-list.component.html',
    styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {


    posts: Array<PostModel> = [];
    type: string;


    constructor(
        private router: Router,
        private blogService: BlogService,
    ) {

        this.blogService.setType.subscribe((type: string) => {
            this.type = type;
        });
    }

    ngOnInit() {
        this.type = localStorage.getItem('currentPart');
        this.getPost();
    }

    async getPost() {
        this.posts = await this.blogService.getPosts();
    }

    openPost(post: PostModel) {
        this.router.navigateByUrl(`/blog/detail/${post.id}`);
    }

}
