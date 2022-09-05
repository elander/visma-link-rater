import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Article } from './article/article.model';
import { ArticleService } from './article.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visma-link-rater';
  myForm: FormGroup;
  articles: Article[] = [] as Article[];

  constructor(private articleService: ArticleService,
    fb: FormBuilder) {
      this.myForm = fb.group({
        'title': new FormControl('',[Validators.required]),
        'link': new FormControl('', [Validators.required]),
     })
    }
    addArticle(value: Article) {
      const newArticle = new Article(value.title, value.link, 0);
      this.articleService.createArticle(newArticle);
    }
    
    ngOnInit() {
      this.articles = this.articleService.getArticles();
    }

    sortedArticles(): Article[] | null {
      // return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
      return null;
    }

}
