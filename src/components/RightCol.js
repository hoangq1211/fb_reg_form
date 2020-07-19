import React, { Component } from 'react';
import './css/rightCol.css';
import PlaceHolder from './PlaceHolder';
import BirthdayBlock from './BirthdayBlock';
import GenderBlock from './GenderBlock';

class  RightCol extends Component{
    constructor(props) {
        super(props);
        this.state= {
            lname: '',
            fname: '',
            phone: '',
            pass: '',
            errorCheck: false,
        };
    }

    getLName = (e) =>{
        this.setState({lname: e});
        console.log(e);
    }   
    getFName = (e) =>{
        this.setState({fname: e});
    }   
    getPhone = (e) =>{
        this.setState({phone: e});
    }   
    getPass = (e) =>{
        this.setState({pass: e});
    }   

    checkData(){
        if(!this.state.fname || !this.state.lname  || !this.state.phone  ||  !this.state.pass ) 
         return false;
    }

    
    handleSubmit = (event) => {
        if (this.checkData() === false){
            alert('Hãy điền đủ thông tin!');   
            this.setState({errorCheck: true});
        }
        else{
            alert('Đăng ký thành công!');
            this.setState({errorCheck: false});
        }
        event.preventDefault();
    }

    render() {
        return(
            <div className='rightCol'>
                <div className='regText'>Đăng Ký</div>
                <p style={{fontSize: '19px'}}>Nhanh chóng và dễ dàng.</p>
                <form onSubmit={this.handleSubmit}>
                    <PlaceHolder 
                        kind='placeHolder2' 
                        type='text' 
                        text='Họ' 
                        sendData={this.getLName}
                        getError={this.state.errorCheck}/>
                    <PlaceHolder 
                        kind='placeHolder2' 
                        type='text' 
                        text='Tên' 
                        sendData={this.getFName}
                        getError={this.state.errorCheck} />
                    <PlaceHolder 
                        kind='placeHolder' 
                        type='text' 
                        text='Số di động hoặc email' 
                        sendData={this.getPhone}
                        getError={this.state.errorCheck}/>
                    <PlaceHolder 
                        kind='placeHolder' 
                        type='password' 
                        text='Mật khẩu mới' 
                        sendData={this.getPass}
                        getError={this.state.errorCheck}/>
                    <BirthdayBlock />
                    <GenderBlock getError={this.state.errorCheck}/>
                    <div>
                        <p className='note'>Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href='#' id='termsLink' target='_blank'>Điều khoản</a> , <a href='#' id='privacyLink' target='_blank'>Chính sách dữ liệu</a> và <a href='#' id='cookieUseLink' target='_blank'>Chính sách cookie</a> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.</p>
                    </div>
                    <div>
                        <input type='submit' className='submitButton' name='submitButton' value = 'Đăng ký' />
                    </div>
                </form>
                <div className='note2'>
                    <a href='#'>Tạo Trang</a> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
                </div>
            </div>
        );
  }
}
export default RightCol;
