import { Buyer } from './buyer';
import { Order } from './order';
import { Entreprise } from './entreprise';
import { Address } from './address';

export enum DeliveryStatus {
    inProgress = 'inProgress',
    waiting= 'waiting',
    delivered= 'delivered'
  }
  
export enum DeliveryType {
    home ='home',
    adaptedPoint='adaptedPoint',
    pointSeller='pointSeller'
  }

export class LivrasionInformation {

  idDelivery!: number;
  deliveryNumber!:  string;
  startDateDelivery!:Date;
  endDateDelivery!: Date;
  deliveryDuration!:number;
  deliveryPoint!:string;
  linkGPS!: string;

  deliveryEmail!:string;
  deliveryPhone!:string;

  deliveryStatus !: DeliveryStatus;
  deliveryType!:DeliveryType;

  enterprise!:  Entreprise;
  buyer!: Buyer;
  order !:  Order;
  address !: Address;

}
