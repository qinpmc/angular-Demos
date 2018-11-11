import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {
  stockCode:string = "IBM";
  price:number;

  @Output("priceChange")
  emitPrice:EventEmitter <PriceQuote> = new EventEmitter();   //子组件输出事件

  @Output()
  buy:EventEmitter <PriceQuote> = new EventEmitter();   //子组件输出事件
  constructor() {
    setInterval( ()=>{
      let priceQuote:PriceQuote = new PriceQuote(this.stockCode,100*Math.random());
      this.price = priceQuote.lastPrice;
      this.emitPrice.emit(priceQuote); //子组件输出内容-- priceQuote
    },1000)
  }

  ngOnInit() {
  }
  buyStock(event){
    this.buy.emit( new PriceQuote(this.stockCode, this.price));
  }

}
export class PriceQuote{
  constructor(public stockCode:string,
              public lastPrice:number){}
}
