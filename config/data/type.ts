export type productType = {
    id:number,
    product_name:string,
    buy:number,
    sell:number,
    quantity:number,
    unit:string
}[]

export type userType = {
    id: number,
    username: string,
    password: string,
    phone: number
}[]

export type order = {
    id: number,
    username: string,
    product_name: string,
    sell: number,
    quantity: number,
    total: number
    state: string
}