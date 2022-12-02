import React from 'react';
import Banner from '../../Banner/Banner';
import TopBanner from '../../Banner/topBanner';
import Categoris from '../../Services/Category/Categoris';


const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Banner></Banner>
            <Categoris></Categoris>
           
        </div>
    );
};

export default Home;