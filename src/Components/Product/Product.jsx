import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingalProoduct from '../SingalProduct/SingalProoduct';

const Product = () => {
    const products=useLoaderData()
    // console.log(products);
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-12'>Total Country In the world:-{products.length} </h1>
            <div className='grid md:grid-cols-3 gap-6 w-[90%] mx-auto'>
                {
                    products.map(product=> <SingalProoduct key={product.cca2} product={product}></SingalProoduct>)
                }
            </div>
        </div>
    );
};

export default Product;