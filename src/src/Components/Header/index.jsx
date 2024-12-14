import { Container } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import './header.scss'
import DrawerComponent from "../Drawer";

const Header = ()=>{

    const [isScrollingUp , setIsScrollingUp] = useState(false)
    const [showDrawer,setShowDrawer]=useState(false)
   
    let previousY=0
    window.addEventListener('scroll', (e)=>{
   
    let body=document.body;
    let positon = body.getBoundingClientRect();
    console.log(positon , 'positions')
    
    
    if(previousY>positon?.y){//scrolling down
        console.log("scroll down")
        previousY=positon.y
        setIsScrollingUp(false)
    }
    else{
        console.log('scroll up')
        setIsScrollingUp(true)
    }
})






    return <div className='header-container'>

        
    <ul className="nav-items">
    <li>
        <a href='#about'>ABOUT</a>
        </li>
        <li>
        <a href='#skills'>SKILLS</a>
        </li>
        <li>
        <a href='#modules'>EXPERIENCE</a>
        </li>
        <li>
        <a href='#projects'>PROJECTS</a>
        </li>
       
        <li>
        <a href='#modules'>MODULES</a>
        </li>
        <li>
        <a href='#comments'>COMMENTS</a>
        </li>
    </ul>

            <div className="menu-icon">
            <MenuIcon onClick={()=>setShowDrawer(!showDrawer)} />
            </div>

            {showDrawer && <div style={{marginTop:"20px"}}><DrawerComponent/></div>}
    </div>
}


export default Header