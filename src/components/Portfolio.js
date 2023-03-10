import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function () {
    return (
        <>
            <Header/>
            <div className='container-fluid'>
                <section id="work" className="row">
                    <div className="col-lg-2 miniHeadings">Portfolio</div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-12 hoverEffect">
                                <a href="https://happy-helpers-app.herokuapp.com/">
                                    <img id="workImg1" src="./Project-Portfolio-React-/images/happyhelperImg.jpg" alt="Background"/>
                                    <div className="bottom-left1">Happy Helper</div>
                                </a>
                            </div>
                            <div className="col-lg-6 hoverEffect">
                                <a href="https://smart-stack.herokuapp.com">
                                    <img id="workImg" src="./Project-Portfolio-React-/images/ReadMe Gen.jpg" alt="Background"/>
                                    <div className="bottom-left5">Smart Stack</div>
                                </a>
                            </div>
                            <div className="col-lg-6 hoverEffect">
                                <a href="https://oriarh.github.io/STABILITY/">
                                    <img id="workImg" src="./Project-Portfolio-React-/images/stability.jpg" alt="Background"/>
                                    <div className="bottom-left2">Stability</div>
                                </a>
                            </div>
                            <div className="col-lg-6 hoverEffect">
                                <a href="https://github.com/oriarh/E-commerce-Back-End">
                                    <img id="workImg" src="./Project-Portfolio-React-/images/Ecomm2.jpg" alt="Background"/>
                                    <div className="bottom-left3">Ecommerce Backend</div>
                                </a>
                            </div>
                            <div className="col-lg-6 hoverEffect">
                                <a href="https://github.com/oriarh/Employee-Tracker">
                                    <img id="workImg" src="./Project-Portfolio-React-/images/Employee Tracker.jpg" alt="Background"/>
                                </a>
                                    <div className="bottom-left4">Employee Tracker</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
