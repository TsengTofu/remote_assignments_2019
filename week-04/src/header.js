import React from 'react'
import './index.css'

export class Header extends React.Component {
        handleClick() {
            document.getElementById("menu").classList.toggle("on");
            document.getElementById("nav").classList.toggle("on");
            document.getElementById("nav").classList.toggle("hidden");
        }

        render() {
            return (
                <div className="header clearfix">
    <a href="#" className="logo">Logo</a>
            <a href="#" className="menu-toggle" id="menu" onClick={this.handleClick}><span></span></a>
            <ul role="navigation" className="nav hidden" id="nav">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
    
  </div>
            )
}}