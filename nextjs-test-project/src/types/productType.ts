export interface IProduct {
    id:number;
    name:string,
    category:string,
    price:number,
    currency:string,
    inStock:number,
    rating:number,
    reviewsCount:number,
    description:string,
    tags: Array<string>,
    images: Array<string>,
    weight_kg:number,
    dimensions_cm: {
        w:number,
        h:number,
        d:number
    },
    createdAt:string
}