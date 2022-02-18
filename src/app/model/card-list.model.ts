import { Card } from "./card.model";

export class CardList {
    count: number;
    results: Card[];

    constructor(obj?:any) {
        this.count = obj && obj.count || "";
        this.results = obj && obj.results && obj.results.map((x:any) => new Card(x)) || [];
    }
}