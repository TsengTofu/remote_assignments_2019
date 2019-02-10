import React, { Component } from 'react';
import './App.css';
import { Header } from './header'
import { Banner } from './banner'
import { Container} from './container'

class App extends React.Component { 
    
    render(){
      return(
        <div className="wrapper">
          <Header />
          <Banner />
          <Container />
        </div>  
      )
    }
}

export default App;