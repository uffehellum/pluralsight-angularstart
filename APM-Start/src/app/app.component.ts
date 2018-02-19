import { Component } from "@angular/core";
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ProductService],
})
export class AppComponent {
  pageTitle: string = 'Angular: Kom godt igang'

}

