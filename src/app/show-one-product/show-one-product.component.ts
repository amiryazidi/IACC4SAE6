import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent {

  @Input()p!:Product;
  @Output()notif=new EventEmitter()

  sentDataToParent(produit:Product){
    this.notif.emit(produit);
  }
}
