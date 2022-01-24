import React from 'react';
import Contact from '../../components/Contact/Contact';
import Destinations from '../../components/Destinations/Destinations';
import Gallery from '../../components/Gallery/Gallery';
import Slider from '../../components/Slider/Slider';
import ChooseUs from '../../components/ChooseUs/ChooseUs';
import Services from '../../components/Services/Services';
import Packages from '../../components/Packages/Packages';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Destinations></Destinations>
            <Packages></Packages>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;