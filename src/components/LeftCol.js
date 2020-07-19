import React, { Component } from 'react';
import './css/leftCol.css';

class  LeftCol extends Component{
    render() {
        return(
            <div className='leftCol'>
                <p className='quote'>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
                <img src='./p1.png' alt='abc'/>
            </div>
        );
  }
}
export default LeftCol;
 