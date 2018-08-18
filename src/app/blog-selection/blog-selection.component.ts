import { Component, OnInit } from '@angular/core';
import {Card} from '../card/card';
import {CardService} from '../service/card.service';

@Component({
  selector: 'app-blog-selection',
  templateUrl: './blog-selection.component.html',
  styleUrls: ['./blog-selection.component.css']
})
export class BlogSelectionComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
  }
  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
}

}
