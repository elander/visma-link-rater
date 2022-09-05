import { Article } from './article/article.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles = [
    new Article('Angular', 'http://angular.io', 3),
    new Article('Informator', 'https://informator.se', 2),
    new Article('Coders Coach', 'https://coders.coach', 4)
  ] as Article[];

  getArticles(){
    return this.articles;
  }

  createArticle(newArticle: Article){
    this.articles.push(newArticle);
  }
  constructor() { }
}
