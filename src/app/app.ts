import { Component, signal } from '@angular/core';
import { ProductsList } from './components/products-list/products-list';
import { ProductFormComponent } from './components/product-form/product-form';
import { ProductService } from './services/product';
import { ProductFilterComponent } from './components/product-filter/product-filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ProductFormComponent,
    ProductFilterComponent,
    ProductsList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  constructor(private productService: ProductService) {}

  protected readonly title = signal('gestion-producto');

   onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }
}