import React from 'react';
import Header from "./Components/general/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./Components/pages/aboutUs/AboutUs";
import ContactUs from "./Components/pages/contactUs/ContactUs";
import Products from "./Components/pages/products/Products";
import "./assets/css/style.css"
import HomePage from "./Components/pages/homePage/HomePage";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact_us" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
