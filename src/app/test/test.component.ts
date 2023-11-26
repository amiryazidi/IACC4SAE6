import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  title:string='E-commerce';
  price!:number;
  listProduct:Product[]=[
    {id:1,title:'t-shirt1',price:500,like:1,quantity:3},
    {id:2,title:'t-shirt2',price:300,like:0,quantity:0},
    {id:3,title:'t-shirt3',price:400,like:0,quantity:5}
  ]

  increment(i:number){
    this.listProduct[i].like++;
  }
  sayHello(){
    alert('hello');
  }
}
