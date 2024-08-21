import { Injectable } from '@angular/core';
import { Category } from '../interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories : Category [] = [
    {id:1,name:"Produção Própria"},
    {id:2,name:"Nacioanal"},
  ];


  constructor() { }

  getCategories() : Category [] {
    return this.categories;
  }
}
