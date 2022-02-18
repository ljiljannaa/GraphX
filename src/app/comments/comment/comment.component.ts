import { Component, Input, OnInit } from '@angular/core';
import { CardComment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CardComment = new CardComment();
  constructor() { }

  ngOnInit(): void {
  }

}
