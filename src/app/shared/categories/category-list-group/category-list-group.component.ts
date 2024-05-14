import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-list-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list-group.component.html',
  styleUrl: './category-list-group.component.css'
})
export class CategoryListGroupComponent {
  @Input() categories:CategoryListGroup[] = [];
  @Output() changeSelect = new EventEmitter<number | null>();

  selectedCategory:number | null = null;


  setSelected(category:CategoryListGroup){
    this.selectedCategory == category.id ? this.selectedCategory = null 
    : this.selectedCategory = this.selectedCategory = category.id;
    this.changeSelect.emit(category.id);
  }
  setActive(id:number):boolean{
    return this.selectedCategory == id;
}
}
export interface CategoryListGroup{
  id:number;
  name:string;
}
