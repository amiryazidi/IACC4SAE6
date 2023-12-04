import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  listProduct:Product[]=[
    {id:1,title:"TV 1", price:18,quantity:2,like:0,image:"../../assets/images/tv.jpg"},
    {id:1,title:"TV 2", price:20,quantity:0,like:0,image:"../../assets/images/tv.jpg"},
    {id:1,title:"TV 3", price:15,quantity:10,like:0,image:"../../assets/images/tv.jpg"}
  ]

  afterRecieveData(t:Product){
    let index=this.listProduct.indexOf(t);
    this.listProduct[index].like++
  }
}
