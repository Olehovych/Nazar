import React from 'react'
import '../footer/Footer.css'
import footerLogo from '../img/2.png'
export default function Footer() {
    return(
        
    <footer>
        <img src={footerLogo} alt=""/>
        <p class="titleService">
            PP_NADRA@ukr.net <br/>
            380 (67) 342 43 91
        </p>
    </footer>
    )
}