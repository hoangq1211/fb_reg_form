import React, { Component } from 'react';
import './App.css';
import LeftCol from  './components/LeftCol'
import RightCol from './components/RightCol';

class  App extends Component{
  
  render() {
    return(
      <div className='AppBody'>
        <LeftCol />
        <RightCol />
      </div>
    );
  }
}
export default App;
