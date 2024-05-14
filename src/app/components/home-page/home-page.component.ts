import { Component } from '@angular/core';
import { BasicLayoutComponent } from '../layouts/basic-layout/basic-layout.component';
import { CategoryListComponent } from "../category-list/category-list.component";
import { ProductsComponent } from "../products/products.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [BasicLayoutComponent, CategoryListComponent, ProductsComponent]
})
export class HomePageComponent {
}
