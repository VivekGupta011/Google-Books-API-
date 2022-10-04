import React from "react";
import githublogo from './githublogo.png';
import './App.css';
export function Footer(){
    return(
        <>
        <div className="Custom-Footer">
            <p className="custom-paragraph">All Rights Reserved ©. Developed by <a href="https://github.com/vivekgupta011" target="_blank"> <strong style={{fontWeight:500}}>Vivek Gupta</strong> <img src={githublogo} style={{width:30,paddingLeft:3}}/></a></p>

        </div>
        </>
    );
}