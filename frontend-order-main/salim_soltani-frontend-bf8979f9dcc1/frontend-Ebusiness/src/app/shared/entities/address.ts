import { Commune } from "./commune"

export class Address {
    
    idAddress!:number
    homeNumber!:string
    floor!:string
    street!:string
    city!:string
    codeZip!:string

    deliveryPointName!: string

    commune!:Commune
}
