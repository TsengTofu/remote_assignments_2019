import React from 'react'
import './index.css'



export class Container extends React.Component {
    handleClick() {
        const x = document.getElementById("hide");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    
    render () {
        return (
         <div className="content">
            
            
            <ul className="box clearfix">
                <li>Content Box 1</li>
                <li>Content Box 2</li>
                <li>Content Box 3</li>
                <li>Content Box 4</li>
            </ul>
            <a href="#" className="button" id="showHide" onClick={this.handleClick}>Call to Action</a>
            <ul className="box clearfix hide" id="hide">
                <li>Content Box 1</li>
                <li>Content Box 2</li>
                <li>Content Box 3</li>
                <li>Content Box 4</li>
            </ul>
        </div> 
            
       
            
        
        )
    }

}