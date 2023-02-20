import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function () {
    return (
    <>
        <Header/>
        <div className="imgContainer">
            <img id="topImg" src="./Project-Portfolio-React-/images/mainImg3.jpg" alt="Background Image"/>
            <div className="bottom-right">Welcome to my portfolio!</div>
        </div>
        <Footer/>
    </>
    )
}