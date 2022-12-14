import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stocks-averaging',
  templateUrl: './stocks-averaging.component.html',
  styleUrls: ['./stocks-averaging.component.css']
})
export class StocksAveragingComponent implements OnInit {
  p1: any;
  p2: any;
  q1: any;
  q2: any;
  avgVal: any;
  show: any = false;
  constructor( private meta:Meta,private title:Title) { }

  ngOnInit() {
    this.meta.updateTag({name:'desciption',content:'Stock Average Calculator is a simple calculator tool by which we can calculate the stock average price of different price stocks we have purchased'})
    this.title.setTitle('stocks average calculator')
  }


  averaging(): any {
    this.show = true;
    this.avgVal = (this.p1 * this.q1 + this.p2 * this.q2) / (this.q1 + this.q2).toFixed(2);
  }
  reset(): any {
    this.show = false;
    this.avgVal = 0;
    this.p1 = 0;
    this.p2 = 0;
    this.q1 = 0;
    this.q2 = 0;
  }
}
