import React from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Always from './Always';

const Home = () => {
    const navigation=useNavigation()
    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div className='text-center text-red-800 text-6xl sticky top-10 left-1/2'>{navigation.state==="loading"?'Loading......':""}</div>
            <Outlet>
            </Outlet>
        </>
    );
};

export default Home;