import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  template: `
    <app-products></app-products>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
