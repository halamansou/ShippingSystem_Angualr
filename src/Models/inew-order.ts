export interface InewOrder {
    clientName:string,
    status:string,
    totalPrice:number,
    totalWeight:number,
    phoneOne:string,
    phoneTwo:string,
    email:string,
    notes:string,
    streetAndVillage:string,
    ifVillage:boolean,
    merchantID:number,
    shippingTypeID:number,
    paymentTypeID:number,
    products:[{
        name:string,
        price:number,
        wight:number,
        quantity:number
    }]
}