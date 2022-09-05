import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('class') class = 'row';
  @Input() article: Article = {} as Article;
  constructor() {
   }

  voteUp() {
    this.article.upvote();
    return false;
  }

  voteDown() {
    this.article.downvote();
    return false;
  }

  ngOnInit(): void {
  }

}
