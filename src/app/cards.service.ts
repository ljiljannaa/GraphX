import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardList } from './model/card-list.model';
import {map} from 'rxjs/operators'
import { Card } from './model/card.model';
import { CardComment } from './model/comment.model';



  const baseUrl = "http://localhost:3000/api/cards";
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  
  constructor(private httpClient: HttpClient) { }

  getAll(params?:any): Observable<CardList>{
      let queryParams = {};

      if(params) {
        queryParams = {
          params: new HttpParams()
          .set("page", params.page || "")
          .set("pageSize", params.pageSize || "")
        }
      }

    return this.httpClient.get(baseUrl, queryParams).pipe(map((x:any)=> new CardList(x)));
  }

  updateCard(card: Card): Observable<Card> {
    return this.httpClient.put(`${baseUrl}/${card._id}`, card).pipe(map((x:any) => new Card(x)));
  }

  getComments(cardId: number) : Observable<CardComment[]>{
    return this.httpClient.get(`${baseUrl}/${cardId}/comments`).pipe((map((data:any) => {
      return data && data.results && data.results.map((x:any) => new CardComment(x)) || [];
    })))
  }

  postComment(newComment: CardComment): Observable<CardComment> {
    return this.httpClient.post(`${baseUrl}/${newComment.cards}/comments`, newComment).pipe(map((x:any) => {
      return new CardComment(x);
    }))
  }
}
