import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection'
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

export default function () {

    return (
        <>
            <Routes>
                <Route path='/Project-Portfolio-React-' element={<HeroSection/>}/>
                <Route path='/aboutme' element={<AboutMe/>}/>
                <Route path='/contactme' element={<ContactMe/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/footer' element={<Footer/>}/>
                <Route path='/resume' element={<Resume/>}/>
            </Routes>
        </>
    )
}
