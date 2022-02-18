import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { CardList } from '../model/card-list.model';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cardList: CardList = new CardList();

  queryParams = {
    page: 1,
    pageSize: 5
  }

  constructor(private service: CardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.service.getAll(this.queryParams).subscribe((data:any) => {
      this.cardList = data;
    })
  }

  onPageChange(newPage:number) {
    this.queryParams.page = newPage;
    this.getCards();
  }

  updateGrade(card: Card) {
    console.log(card);
    this.service.updateCard(card).subscribe();
  }

}
