import ProductCard from '@/component/productComponent/page';
import { IProduct } from '@/types/productType';
import React from 'react';



const products = async() => {
   
    const res = await fetch("http://localhost:5000/products",{
        next:{
            revalidate:5
        }
    })
    const products = await res.json()
    
    console.log(products)
    return (
        <div>
            <h1>All products is here</h1>
            
            <div className='grid grid-cols-4 items-center justify-items-center gap-10 p-20'>
                {
                    products.map((product: IProduct)=>(
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default products;



// 1. cache:"force-cache"