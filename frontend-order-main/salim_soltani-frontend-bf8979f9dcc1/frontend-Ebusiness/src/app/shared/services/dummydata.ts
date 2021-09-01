
import { Contact } from '@shared/entities/contact';
import { Entreprise, PublicPrivate } from '@shared/entities/entreprise';
import { Product } from '@shared/entities/product';
import { LivrasionInformation ,DeliveryStatus,DeliveryType} from "@shared/entities/livrasioninformation";
import { Order ,OrderStatus} from '@shared/entities/order';
import { Buyer, Buyerstatus } from '@shared/entities/buyer';
import { Address } from '@shared/entities/address';
import { Wilaya } from '@shared/entities/wilaya';
import { Commune } from '@shared/entities/commune';
import { PaymentMethod } from '@shared/domain/enums/payment.method';


export const wilayaS: Wilaya = {idWilaya:2, wilayaName:"Chlef"}

export const wilayaS1: Wilaya = {idWilaya:3, wilayaName:"Laghouat"}

export const communeS: Commune = {idCommune:19, communeName:"Tadjna", wilaya:wilayaS}

export const communeS1: Commune = {idCommune:55, communeName:"El Assafia", wilaya:wilayaS1}
export const communeS2: Commune = {idCommune:12, communeName:"Tsabit", wilaya:wilayaS1}
export const communeS3: Commune = {idCommune:41, communeName:"El Hadjadj", wilaya:wilayaS1}

export const communeB: Commune = {idCommune:45, communeName:"Bouzghaia", wilaya:wilayaS}

export const addressS: Address = {idAddress:15,homeNumber:"63-B14",floor:"5", street:"148", city:"Lhasacen", codeZip:"01064", deliveryPointName :"2nd DP for seller"  , commune:communeS}

export const addressB: Address = {idAddress:1,homeNumber:"65-B3",floor:"73", street:"132", city:"8mai1945", codeZip:"01002", deliveryPointName :"DP for buyer"  , commune:communeB}

export const contactS: Contact= {idContact:2,firstNameS:"Ahmed",lastNameS:"Messsauie",birthDayS:new Date(1990,1,12) , address:addressS, emailSeller:"ahmed.messsauie85@gmail.com", phoneSeller:"213598741203"}

export const paymentMethod: PaymentMethod[] = [
  
  PaymentMethod.dahabia,
  PaymentMethod.bancaire

]

export const deliveryPoints: Address[] = [

  {idAddress:2,homeNumber:"61-B1",floor:"74", street:"71", city:"ain saleh", codeZip:"05002", deliveryPointName : "1st DP for seller"  , commune:communeS1},
  {idAddress:3,homeNumber:"64-B4",floor:"77", street:"07", city:"05juillet1962", codeZip:"03012", deliveryPointName :"2nd DP for seller"  , commune:communeS2},
  {idAddress:4,homeNumber:"63-B8",floor:"45", street:"02", city:"bab ElOued", codeZip:"02015", deliveryPointName :"3rd DP for seller"  , commune:communeS3}

]

export const buyer: Buyer = {idBuyer:1, firstNameB:"sahar", lastNameB:"aggab", birthDayB:new Date(1995, 5, 11), address:addressB,emailBuyer:"aggab.sahar1995@gmail.com",phoneBuyer:"213697935487", buyerStatus:Buyerstatus.person, registerCommercialNumberB:"", taxIdentificationNumberB:"",  articleBuyer:"", enterpriseNameBuyer:"", webSiteB:""}

export const entreprise: Entreprise = {idEnterprise:1, enterpriseName:"IT_Techno",town:"ElMansoura", contact:contactS, address:addressS, webSite:"./website1/seller/A4d/index1.html", taxIdentificationNumberS:"35S525452052", registerCommercialNumberS:"16A58463553S4S", accountNumber:"124563270012", accountType:"Badr", publicPrivate:PublicPrivate.Public, logoImage:"./image/base64/A9j/logo1.png", deliveryPoints: deliveryPoints, paymentMethod:paymentMethod, transportCosts:1500, deliveryTime:11, reservationTime:5, acceptationTime: 24, validationTime:20, orderRecoveryTime:3, articleSeller:"ARTICLE1"}     


export const PRODUCTS: Product[] = [

  {idProduct:1,productRef: "G65F65F660G52",productName: "rice",enterprise: entreprise,price: 400,unit: "1 kg", category:"CA3",productImage: "https://www.world-grain.com/ext/resources/Article-Images/2020/12/GMR_Rice_AdobeStock_64819529_E_Nov.jpg?1609338918", quantity:10, productDescription: "goood product1 .. bla bla bla bla",discount:2,total:3920},
  {idProduct:2,productRef: "A6565E5FD22T5",productName: "pc", enterprise: entreprise, price: 100,unit: "1 piece", category:"CA9",productImage: "https://techyteam.co.uk/wp-content/uploads/2020/07/gaming-pc.jpg", quantity:2,productDescription: "good product2 .. bla bla bla bla", discount:0,total:200},
  {idProduct:5,productRef: "11D0GF5V00555",productName: "Regular medicines", enterprise: entreprise, price: 950,unit: "1 piece", category:"CA2",productImage: "https://www.niddk.nih.gov/-/media/Images/Health-Information/Diabetes/Photo-of-a-needle-with-a-bottle-of-insulin.jpg", quantity:13,productDescription: "good product5 .. bla bla bla bla", discount:0,total:12350}
  
]  

export const order: Order = {idOrder:8,orderNumber:"12XD300RF",dateOrder:new Date(2021, 8, 31),enterprise:entreprise,buyer:buyer,orderStatus: OrderStatus.waiting,orderTotal:16580,totalOutsideTax:16470,orderLineProducts:PRODUCTS,tva:120, cancellationReason:"kjuujip"};
 
export const livrasionInformation: LivrasionInformation = {idDelivery:4, deliveryNumber:"dthydh",startDateDelivery:new Date(2021, 9, 10),enterprise:entreprise, order: order, buyer:buyer,address:addressB, endDateDelivery:new Date(2021, 9, 30), deliveryStatus: DeliveryStatus.inProgress, deliveryType:DeliveryType.home, deliveryDuration:20, linkGPS:"https://goo.gl/maps/XSPvzZjV1SdfkUQL8", deliveryPoint:"hmgjh", deliveryEmail:"aggab.sahar95@gmail.com", deliveryPhone:"213564302514"}
