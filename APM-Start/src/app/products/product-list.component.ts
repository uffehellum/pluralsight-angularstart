import { Component } from "@angular/core";
import { StarComponent } from '../shared/star.component'
import { ProductService } from "./product.service";
import { IProduct } from "./product";

@Component({
    templateUrl: './product-list.component.html',
})
export class ProductListComponent {
    pageTitle: string = 'Produktliste'
    imageWidth: number = 50
    imageMargin: number = 2
    showImages: boolean = false
    listFilter: string
    products: IProduct[]
    filteredProducts: IProduct[]
    errorMessage: string

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
        this._productService.getProducts()
        .subscribe(data => {
            this.products = data
            this.filteredProducts = data
        }, err => this.errorMessage = <any>err)        
    }
}