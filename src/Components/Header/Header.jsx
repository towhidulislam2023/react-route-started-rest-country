import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [menubar, setMenubar] = useState(false)
    const routes = [
        {
            "id": 1,
            "name": "Home",
            "path": "/",
            "icon": "home",
            "visible": true
        },
        {
            "id": 2,
            "name": "About",
            "path": "/about",
            "icon": "info",
            "visible": true
        },
        {
            "id": 3,
            "name": "Products",
            "path": "/products",
            "icon": "shopping_cart",
            "visible": true
        },
        {
            "id": 4,
            "name": "Contact",
            "path": "/contact",
            "icon": "mail",
            "visible": true
        },
        {
            "id": 5,
            "name": "Login",
            "path": "/login",
            "icon": "person",
            "visible": false
        }
    ]
    return (
        <div className='bg-gray-900'>
            <div className='w-[90%] mx-auto'>
                <nav className='bg-gray-900 '>
                    <div onClick={() => setMenubar(!menubar)} className='md:hidden inline-block '>
                        <span >{menubar ?
                            <XMarkIcon className="h-8 w-8 text-white cursor-pointer" /> : <Bars3Icon className="h-8 w-8 text-white cursor-pointer" />
                        }</span>
                    </div>
                </nav>
                <ul className={`md:flex gap-10 md:mx-3 bg-gray-900 text-white p-4  md:static  absolute   duration-500 ${menubar ? 'top-6' : '-top-96'}`}>
                    {
                        routes.map((route, idx) =><NavLink className={({isActive})=>isActive?"text-yellow-200 underline":""}  key={idx} to={route.path}><li key={idx} className='text-xl font-bold bg-gray-900 hover:bg-gray-600 rounded-md px-4 py-2'>{route.name}</li></NavLink>
                        )
                    }

                </ul>
            </div>
        </div>

    );
};

export default Header;