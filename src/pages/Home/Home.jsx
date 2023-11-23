import React from 'react';
import { Helmet } from 'react-helmet-async';
import CategorySection from './CategorySection';
import BannerSection from './BannerSection';
import PopularSection from './PopularSection';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <CategorySection></CategorySection>
            <PopularSection></PopularSection>
        </div>
    );
};

export default Home;