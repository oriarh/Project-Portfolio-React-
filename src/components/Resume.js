import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function () {
    return (
    <>
        <Header />
        <div className='container-fluid'>
            <section id="aboutMe" className="row">
                <div className="col miniHeadings">Resume</div>
            </section>
            <div className="col aboutMeBody">
                <h3 className='downloadResume'>Click <a href="https://drive.google.com/file/d/1kInTsRs9k0ulQEUUEHdztN93i7NKRKJe/view?usp=sharing">here</a> to download my resume</h3>
            </div>
            <div className='row'>
                <div className="col skillsMiniHeadings">Skills</div>
                <ul className='col'>
                        <li className='resumeSkillListLi'>HTML</li>
                        <li className='resumeSkillListLi'>CSS</li>
                        <li className='resumeSkillListLi'>Javascript</li>
                        <li className='resumeSkillListLi'>Node</li>
                        <li className='resumeSkillListLi'>Express</li>
                        <li className='resumeSkillListLi'>Mongo</li>
                        <li className='resumeSkillListLi'>React</li>
                </ul>
            </div>
        </div><br/>
    </>
    )
}