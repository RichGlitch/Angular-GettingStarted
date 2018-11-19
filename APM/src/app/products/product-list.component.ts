import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent 
implements OnInit{
  

  title: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  //listFilter: string = 'cart';
  _listFilter: string;
  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  onRatingClicked(message: string): void{
    this.title = 'Product list: ' + message;
  }

  filteredProducts: IProduct[];

  products: IProduct[] = [];

  constructor(private productService: ProductService){
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); //creates a new array with items matching with filterBy string
  }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  
  ngOnInit(): void {
    console.log('In OnInit');
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );

  }
}