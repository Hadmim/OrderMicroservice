import { Address } from "./address";

export class Contact {
    
    idContact!:  number;
    firstNameS!: string;
    lastNameS!: string;
    birthDayS!: Date;

    address!: Address;

    emailSeller!:string;
    phoneSeller!:string;
}
