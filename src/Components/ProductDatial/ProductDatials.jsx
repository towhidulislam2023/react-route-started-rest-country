import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ProductDatials = () => {
    const singalProduct=useLoaderData()
    console.log(singalProduct[0]);
    const navigate=useNavigate()
    const handelGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <div className='md:w-[50%] mx-auto bg-gray-100 px-6 py-14 my-16 text-black rounded-xl'>
                {
                    singalProduct.map(sp => <div>
                        <h1 className='text-4xl font-bold text-center my-6'>{sp.name.common}</h1>
                        <img className='mx-auto' src={sp.flags.png}></img>
                        <p className='text-center text-lg my-2'>Capital: {sp.capital[0]}</p>
                        <div className='text-center'>
                            <button onClick={handelGoBack} className='underline text-blue-800' >Go Back</button>
                        </div>
                        </div> )
                }
            </div>
            
            
        </div>
    );
};

export default ProductDatials;