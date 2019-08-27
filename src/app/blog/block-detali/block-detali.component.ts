import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {PostModel} from '../block-list/post.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-block-detali',
    templateUrl: './block-detali.component.html',
    styleUrls: ['./block-detali.component.scss']
})
export class BlockDetaliComponent implements OnInit {

    post: PostModel;
    id: number;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {
        this.id = +this.route.snapshot.params.id;
    }

    ngOnInit() {
        this.getPost();
    }

    async getPost() {
        this.post = await this.blogService.getPostById(this.id);
    }

}
