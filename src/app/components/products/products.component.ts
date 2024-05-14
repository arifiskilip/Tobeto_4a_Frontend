import { Component } from '@angular/core';
import { CardComponent } from "../../shared/products/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [CardComponent,CommonModule]
})
export class ProductsComponent {
    products: Product[] = [
        {
            id: 1,
            name: "Dell XPS 13",
            description: "High-performance laptop with Intel i7 processor.",
            price: 999.99,
            image: "https://via.placeholder.com/300",
            categoryId: 1
        },
        {
            id: 2,
            name: "iPhone 14",
            description: "Latest Apple smartphone with stunning design.",
            price: 1099.99,
            image: "https://via.placeholder.com/300",
            categoryId: 1
        },
        {
            id: 3,
            name: "Samsung Galaxy Tab S8",
            description: "Versatile tablet for all your needs.",
            price: 699.99,
            image: "https://via.placeholder.com/300",
            categoryId: 1
        },
        {
            id: 4,
            name: "Apple Watch Series 7",
            description: "Advanced smartwatch for fitness and health tracking.",
            price: 399.99,
            image: "https://via.placeholder.com/300",
            categoryId: 1
        },
        {
            id: 5,
            name: "Sony WH-1000XM4",
            description: "Industry-leading noise canceling headphones.",
            price: 349.99,
            image: "https://via.placeholder.com/300",
            categoryId: 1
        },
        {
            id: 6,
            name: "Nike Dry-Fit T-Shirt",
            description: "Comfortable and breathable t-shirt for sports.",
            price: 29.99,
            image: "https://via.placeholder.com/300",
            categoryId: 2
        },
        {
            id: 7,
            name: "Levi's 501 Jeans",
            description: "Classic straight leg jeans for everyday wear.",
            price: 59.99,
            image: "https://via.placeholder.com/300",
            categoryId: 2
        },
        {
            id: 8,
            name: "The North Face Nuptse Jacket",
            description: "Warm and durable jacket for winter.",
            price: 199.99,
            image: "https://via.placeholder.com/300",
            categoryId: 2
        },
        {
            id: 9,
            name: "Adidas Ultraboost",
            description: "High-performance running shoes with Boost technology.",
            price: 179.99,
            image: "https://via.placeholder.com/300",
            categoryId: 2
        },
        {
            id: 10,
            name: "Zara Floral Midi Dress",
            description: "Elegant and stylish dress for special occasions.",
            price: 79.99,
            image: "https://via.placeholder.com/300",
            categoryId: 2
        },
        {
            id: 11,
            name: "IKEA Ektorp Sofa",
            description: "Comfortable and affordable sofa for your living room.",
            price: 299.99,
            image: "https://via.placeholder.com/300",
            categoryId: 3
        },
        {
            id: 12,
            name: "Casper Memory Foam Mattress",
            description: "Comfortable and supportive mattress for better sleep.",
            price: 799.99,
            image: "https://via.placeholder.com/300",
            categoryId: 3
        },
        {
            id: 13,
            name: "Bosch Serie 6 Dishwasher",
            description: "Efficient and quiet dishwasher with multiple settings.",
            price: 499.99,
            image: "https://via.placeholder.com/300",
            categoryId: 3
        },
        {
            id: 14,
            name: "Nespresso VertuoPlus",
            description: "High-quality coffee machine for perfect espresso.",
            price: 199.99,
            image: "https://via.placeholder.com/300",
            categoryId: 3
        },
        {
            id: 15,
            name: "Philips Hue Smart Bulb",
            description: "Smart lighting system to control your home's ambiance.",
            price: 49.99,
            image: "https://via.placeholder.com/300",
            categoryId: 3
        }
    ];
}

export interface Product{
    id:number;
    name:string;
    description:string;
    price:number;
    image:string;
    categoryId:number;
}