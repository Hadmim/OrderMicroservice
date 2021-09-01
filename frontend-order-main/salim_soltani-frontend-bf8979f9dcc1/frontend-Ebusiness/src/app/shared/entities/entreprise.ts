import { Order } from './order';
import { Contact } from './contact';
import { Address } from './address';
import { PaymentMethod } from '@shared/domain/enums/payment.method';

export enum PublicPrivate{
    Public = 'Public',
    Private =  'Private'
 }
  
export class Entreprise {

    idEnterprise!:number
    enterpriseName!:string
    town!:string

    contact!:Contact
    address!:Address

    webSite!:string
    taxIdentificationNumberS!:string
    registerCommercialNumberS!:string
    accountNumber!:string
    accountType!:string

    publicPrivate!:PublicPrivate
    logoImage!:string
    transportCosts!:number
    deliveryTime!:number
    reservationTime!:number
    acceptationTime!:number
    validationTime!:number
    orderRecoveryTime!:number
    articleSeller!:string

    deliveryPoints!: Address[]
    paymentMethod!: PaymentMethod[]
}
