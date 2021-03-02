import { Component, OnInit } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { category } from '../models/interfaces/categoria';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categorys :any =[];


  constructor(private categoryservice :CategoryService) { }

  ngOnInit(): void {
    this.fetchCategorys();
   
  }

  fetchCategorys(){

return this.categoryservice.getAllCategory().subscribe((data : {}) =>{
  this.categorys=data;
  console.log(data);

});
   
  }

}
 