import React from "react"
import user from '../src/asset/user.png'
import codeforces from '../src/asset/codeforces.jpg'
import github from '../src/asset/github.png'
import pin from '../src/asset/pin.svg'
import res from '../src/asset/res.webp'
import './App.css'
import resume from '../src/asset/resume.pdf'
import linked from '../src/asset/linked.png'

function Left(params) {
    const mailme=()=>{
        window.open("mailto:ankitsharma072001@gmail.com")
    }
    return(
        <div className="lcontainer">
            <img src={user} className="img1"/>
            <h1 className="name1">Ankit Sharma</h1>
            <h2 className="head">Web Developer</h2>
            <div className="loc">
                <img src={pin} className="img3"/>
                <p className="location">Delhi,India</p>
            </div>
            <a href={resume} className="resume1">
                <img src={res} className="img3"/>
                <p className="resume">Resume</p>
            </a>
            <a href="https://github.com/jarvis-sharma" className="link1">
                <img src={github} className="img2"/>
                <p className="github">Github</p>
            </a>
            <a href="https://codeforces.com/profile/Jarvis_sharma" className="link2">
                <img src={codeforces} className="img2"/>
                <p className="codeforces">Codeforces</p>
            </a>
            <a href="https://www.linkedin.com/in/ankit-sharma-79a393191/" className="link2">
                <img src={linked} className="img4"/>
                <p className="linkedIn">LinkedIn</p>
            </a>
            <div className="id1">
                ankitsharma072001@gmail.com
            </div>
            <div className="no">
                98989811111
            </div>
            <div className="mail" onClick={mailme}>
                <div className="textsize">
                    Mail-me
                </div>
            </div>
        </div>
    )
}
export default Left