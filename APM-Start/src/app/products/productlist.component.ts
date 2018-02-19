import { Component } from "@angular/core";
import { StarComponent } from '../shared/star.component'
import { ProductService } from "./product.service";
import { IProduct } from "./product";

@Component({
    selector: 'pm-productlist',
    templateUrl: './producttlist.component.html',
})
export class ProductListComponent {
    imageWidth: number = 50
    imageMargin: number = 2
    showImages: boolean = false
    listFilter: string
    products: IProduct[]
    filteredProducts: IProduct[]

    constructor(private _productService: ProductService) {
    }

    toggleImage() { this.showImages = !this.showImages}

    onRatingClicked(product: any, message: string): void {
        // alert(message)
        product.starRating = 5 - product.starRating 
    }

    performFilter(filter:string) {
        this.listFilter = filter.toLocaleLowerCase()
        this.filteredProducts = this.products.filter((p: IProduct) => 
            p.productName.toLocaleLowerCase().indexOf(this.listFilter) != -1)
    }
    ngOnInit() {
        this.products = this._productService.getProducts()
        this.filteredProducts = this.products
    }
}