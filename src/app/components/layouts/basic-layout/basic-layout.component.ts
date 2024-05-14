import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-basic-layout',
    standalone: true,
    templateUrl: './basic-layout.component.html',
    styleUrl: './basic-layout.component.css',
    imports: [NavbarComponent, FooterComponent,RouterModule]
})
export class BasicLayoutComponent {

}
