import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryListGroupComponent } from '../../shared/categories/category-list-group/category-list-group.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
  imports: [CategoryListGroupComponent],
})
export class CategoryListComponent {
 @Output() changeSelect = new EventEmitter<number | null>();
  categories: Category[] = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' }
  ];

  onChangeSelect(cateoguryId:number | null){
    console.log(cateoguryId)
  }
}

export interface Category {
  id: number;
  name: string;
}
