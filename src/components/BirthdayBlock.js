import React, { Component } from 'react';

class  BirthdayBlock extends Component{
    render() {
        return(
            <div>
                <div className='bgText'>Ngày sinh</div>
                <div>
                    <select id='day' className='birthdayDate' title='Ngày' defaultValue='4'> 
                        <option value='0'>Ngày</option>
                         <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        <option value='13'>13</option>
                        <option value='14'>14</option>
                        <option value='15'>15</option>
                        <option value='16'>16</option>
                        <option value='17'>17</option>
                        <option value='18'>18</option>
                        <option value='19'>19</option>
                        <option value='20'>20</option>
                        <option value='21'>21</option>
                        <option value='22'>22</option>
                        <option value='23'>23</option>
                        <option value='24'>24</option>
                        <option value='25'>25</option>
                        <option value='26'>26</option>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                        <option value='31'>31</option>
                    </select>
                    <select id='month' className='birthdayDate' title='Tháng' defaultValue='7'>
                        <option value='0'>Tháng</option>
                        <option value='1'>Tháng 1</option>
                        <option value='2'>Tháng 2</option>
                        <option value='3'>Tháng 3</option>
                        <option value='4'>Tháng 4</option>
                        <option value='5'>Tháng 5</option>
                        <option value='6'>Tháng 6</option>
                        <option value='7'>Tháng 7</option>
                        <option value='8'>Tháng 8</option>
                        <option value='9'>Tháng 9</option>
                        <option value='10'>Tháng 10</option>
                        <option value='11'>Tháng 11</option>
                        <option value='12'>Tháng 12</option>
                    </select>
                        <select id='year' className='birthdayDate' title='Năm' defaultValue='5'>
                        <option value='0'>Năm</option>
                        <option value='1'>1999</option>
                        <option value='2'>1998</option>
                        <option value='3'>1997</option>
                        <option value='4'>1996</option>
                        <option value='5'>1995</option>
                        <option value='6'>1994</option>
                        <option value='7'>1993</option>
                        <option value='8'>1992</option>
                        <option value='9'>1991</option>
                    </select>
                </div>
            </div>
        );
  }
}
export default BirthdayBlock;
 