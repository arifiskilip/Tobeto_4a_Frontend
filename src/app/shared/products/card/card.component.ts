import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() name!:string;
  @Input() description?:string;
  @Input() price!:number;
  @Input() image?:string;
}
