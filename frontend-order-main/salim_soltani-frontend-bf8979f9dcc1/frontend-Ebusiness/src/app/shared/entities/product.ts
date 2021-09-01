import { Entreprise } from './entreprise';

export class Product {

  idProduct!: number;
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
  discount!: number;

}
