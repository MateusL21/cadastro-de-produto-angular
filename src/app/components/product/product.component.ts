import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  @Input()
  categories : Category [] = [];

  @Input()
  product ?: Product;

  @Output()
  saveEmitter = new EventEmitter();

  ngOnInit(): void {
  }

  save(){
    this.saveEmitter.emit();
  }

}