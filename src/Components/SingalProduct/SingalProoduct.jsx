import React from 'react';
import { Link } from 'react-router-dom';

const SingalProoduct = ({ product }) => {
    // console.log(product);
    const { name, region, area, population, ccn3 } = product
    return (
        <div className='bg-gray-200 text-black md:px-20 py-14'>
            <h1 className='text-center text-3xl font-bold'>{name.common} </h1>
            <p className='text-center text-xl font-bold'>{region}</p>
            <p className='text-center text-xl font-bold'>Land Area: {area}</p>
            <p className='text-center text-xl font-bold'>Total Population: {population}</p>
            <Link to={`/products/${ccn3}`}><button className='btn bg-slate-700  block mx-auto my-5 px-4 py-2 rounded-lg font-bold text-white'  >See Daitails</button></Link>   
        </div>
    );
};

export default SingalProoduct;