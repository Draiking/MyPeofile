import {Component, Input, OnInit} from '@angular/core';
import {BlockSelectModel} from '../../block-select/block-select.model';
import {BlogService} from '../../blog.service';

@Component({
  selector: 'app-section-blog',
  templateUrl: './section-blog.component.html',
  styleUrls: ['./section-blog.component.scss']
})
export class SectionBlogComponent implements OnInit {

  @Input() section: BlockSelectModel;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  onType() {
    this.blogService.setType.next(this.section.type);
    localStorage.setItem('currentPart', this.section.type);

  }

}
