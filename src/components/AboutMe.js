import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function () {
    return (
    <>
        <Header />
        <div className='container-fluid'>
            <section className="row aboutMe">
                <img className='myImage' src='./Project-Portfolio-React-/images/Imageforportfolio.jpeg'/>
            </section>
            <section id="aboutMe" className="row">
                <div className="col miniHeadings">About Me</div>
            </section>
            <div className="col aboutMeBody">
                    <p>Currently working as a data specialist in the healthcare domain, primarily working with Tableau and Sql Server. Prior experience as Marketing executive at the largest private sector insurance company in Pakistan.</p>
                    <p>I am a team player who works well under pressure with a focus on execution, craftlganship and leadership. I have a growth mindset, always eager to learn new things and expand my horizon.</p>
            </div>
        </div>
    </>
    )
}