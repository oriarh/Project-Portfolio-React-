import React from 'react'
import Footer from './Footer'
import Header from './Header'
import mainImg from '../images/mainImg3.jpg'

export default function () {
    return (
    <>
        <Header/>
        <div className="imgContainer">
            <img id="topImg" src={mainImg} alt="Background Image"/>
            <div className="bottom-right">Welcome to my portfolio!</div>
        </div>
        <Footer/>
    </>
    )
}