import React, { Component } from 'react';

class  PlaceHolder extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (e) => {
        /*this.setState({value: e.target.value});
        this.props.sendData(this.state.value);*/
        this.setState({value: e.target.value});
        this.props.sendData(e.target.value);
    }



    showErrorStyle = () => {
        if(this.props.getError === true && !this.state.value)
            return {border: '1px solid red'};
    }

    render() {
        return(
            <div>
                <input 
                    className={this.props.kind} 
                    type={this.props.type} 
                    style={this.showErrorStyle()}
                    placeholder={this.props.text} 
                    onChange={this.handleChange}/>
            </div>
        );
  }
}
export default PlaceHolder;
 