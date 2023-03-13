import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product} from '../interfaces/Product'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/products`);
  }
  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}`);
  }
  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.BASE_URL}/products/create`, product);
    
  }
  deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(`${this.BASE_URL}/products/delete?productID=${id}`);
  }
  updateProduct(id:string, product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.BASE_URL}/products/update?productID=${id}`,product);
    
  }
  

}
