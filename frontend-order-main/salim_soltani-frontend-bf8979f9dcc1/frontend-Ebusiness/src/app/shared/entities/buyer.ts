import { Address } from "./address"

export enum Buyerstatus{
    person ='person',
    enterprise ='enterprise'
}
export class Buyer {
    
    idBuyer!:number
    firstNameB!:string
    lastNameB!:string
    birthDayB!:Date
    emailBuyer!:string
    phoneBuyer!:string
    buyerStatus!:Buyerstatus
    registerCommercialNumberB!:string
    taxIdentificationNumberB!:string
    
    articleBuyer!: string
    enterpriseNameBuyer!: string
    webSiteB!: string

    address!:Address

}