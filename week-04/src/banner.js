import React from 'react'
import './index.css'




export class Banner extends React.Component {
    handleClick () {
      document.getElementById("welcome_message").innerHTML="<h1>Hava a good time!</h1>";
    }
    
    render() {
        return (
            <div className="content"><div id="welcome_message" className="welcome_message" onClick={this.handleClick}>
               <h1 className="welcome_message" >Welcome to AppWorks School</h1>
       
           </div></div>)
    } 
}