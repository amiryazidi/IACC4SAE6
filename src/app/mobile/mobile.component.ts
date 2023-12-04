import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  listProduct:Product[]=[
    {id:1,title:"Phone 1", price:18,quantity:2,like:0,image:"../../assets/images/tv.jpg"},
    {id:1,title:"Phone 2", price:20,quantity:0,like:0,image:"../../assets/images/tv.jpg"},
    {id:1,title:"Phone 3", price:15,quantity:10,like:0,image:"../../assets/images/tv.jpg"}
  ]
}
