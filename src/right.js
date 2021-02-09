import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Right(params) {
    const [active,setActive]=useState('')
    useEffect(()=>{
        let currentURL=window.location.href
        console.log(currentURL);
        if(currentURL.endsWith('/'))
            setActive('Introduction');
        else if(currentURL.endsWith('/projects'))
            setActive('Projects')
        else if(currentURL.endsWith('/skills'))
            setActive('Skills') 
           
    },[active])
    return(
        <div className="rcontainer">
            <div className="navbar_active">
            {active}
            </div>
            <div className="items">
                {active!=='Introduction'&&
                   <Link to="/"> <div className="Introduction" onClick={()=>setActive('Introduction')}>
                    Introduction
                </div></Link>}
                {active!=='Skills'&&
                   <Link to="/skills"> <div className="Skills" onClick={()=>setActive('Skills')}>
                    Skills
                </div></Link>}
                {active!=='Projects'&&
                    <Link to="/projects"><div className="Projects" onClick={()=>setActive('Projects')}>
                    Projects
                </div></Link>}
                
            </div>
        </div>
    )
}

export default Right