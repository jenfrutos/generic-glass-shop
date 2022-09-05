import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './contactComponent';
import Footer from './footerComponent';
import Header from './headerComponent';
import Home from './homeComponent';
import NewUser from './newUserComponent';
import Product from './productComponent';
import Services from './servicesComponent';

const Main = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="product" element={<Product />} />
                <Route path="newUser" element={<NewUser />} />
                <Route path="contactUs" element={<ContactUs />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Main;