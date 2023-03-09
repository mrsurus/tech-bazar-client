import React from 'react';
import Category from '../../Category/Category';
import Advertiesment from '../Advertiesment/Advertiesment';
import Allproducts from '../Allproducts/Allproducts';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertiesment></Advertiesment>
            <Allproducts></Allproducts>
        </div>
    );
};

export default Home;