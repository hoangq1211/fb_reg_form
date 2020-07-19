import React, { Component } from 'react';

class  GenderBlock extends Component{
    constructor(props) {
        super(props);
    }

    showErrorStyle = () => {
        if(this.props.getError === true)
            return {border: '1px solid red'}

    }

    render() {
        return(
            <div>
                <div className='bgText' >Giới tính</div>
                    <div id='genderSelect' style={this.showErrorStyle()}>
                        <input type='radio' id='female'  name='gender' value='female' />
                        <label htmlFor='female' className='genderText'>Nữ</label>
                        <input type='radio' id='male' name='gender' value='male'/>
                        <label htmlFor='male' className='genderText'>Nam</label>
                        <input type='radio' id='optional' name='gender' value='optional'/>
                        <label htmlFor='optional' className='genderText'>Tùy chỉnh</label>
                    </div>
            </div>
        );
  }
}
export default GenderBlock;
 