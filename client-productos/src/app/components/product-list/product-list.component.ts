import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 

  constructor(private productService: ProductService) { }
  products:Product[]=[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{
    this.productService.getProducts().subscribe(
      (res: any) => {
        console.log(res);
        
        this.products = Object.values(res.information)},
      
      error =>console.log(error)
    )

  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe(
      res=>{
        this.getProducts();

      },
      err=>{
        console.log(err);
      }
    );
  }




}
