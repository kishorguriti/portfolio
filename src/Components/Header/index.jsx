import { Container } from "@mui/material";
import React from "react";
import './header.scss'

const Header = ()=>{

    return <Container>
        
    <ul className="nav-items">
    <li>
        <a href='#intro'>Intro</a>
        </li>
        <li>
        <a href='#skills'>Skills</a>
        </li>
        <li>
        <a href='#projects'>Projects</a>
        </li>
        <li>
        <a href='#modules'>Key Modules</a>
        </li>
        <li>
        <a href='#comments'>Comments</a>
        </li>
</ul>
    </Container>
}


export default Header