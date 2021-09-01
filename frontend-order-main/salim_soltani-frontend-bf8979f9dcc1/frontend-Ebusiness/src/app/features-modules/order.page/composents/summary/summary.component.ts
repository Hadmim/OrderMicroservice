import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@shared/entities/product';
import { PRODUCTS } from '@shared/services/dummydata';
export interface PeriodicElement {
  id:number;
  name: string;
  img: string;
  price: number;
  description: string;
  checked:boolean


 /* idProduct!: number;
  productRef!: string;
  productName!: string;
  enterprise!: Entreprise;
  price !: number;
  unit!:string;
  category!:string;
  productImage!:string;
  productDescription!:string;

  quantity!: number;
  total!: number;
  discount!: number;*/
}


const ELEMENT_DATA: Product[] = PRODUCTS
 


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  tab!:Product[]
  product!:Product
  checked:boolean = true;
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity','action'];
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {

   
    
  }
  select(){
    this.checked =! this.checked;
      
    }
    quantity:number=1;
   
plus(prd:Product){
  prd.quantity++
this.quantity++;

console.log(prd.quantity)
}
minus(prd:Product){
  prd.quantity--
  this.quantity++;
  console.log(prd.quantity)
  }
}
