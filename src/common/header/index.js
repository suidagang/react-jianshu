import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

import {HeaderWapper,Logo,Nav,NavItem,NavSearch,Addition,Button,NavSearchBox} from './style';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      focuse:false
    };
    this.inputBlur = this.inputBlur.bind(this);
    this.inputFocus = this.inputFocus.bind(this);
  }
  render() {
    return (
        <HeaderWapper>
            <Logo href='/' />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>搜索</NavItem>
                <NavItem className='right iconfont iconAa'></NavItem>
                <NavSearchBox>
                    <CSSTransition 
                    in={ this.state.focuse }
                    timeout={ 200 }
                    classNames='fade'>
                      <NavSearch onBlur = {this.inputBlur} onFocus = {this.inputFocus} className={this.state.focuse?'focuse':''}></NavSearch>
                    </CSSTransition>
                      <i className={this.state.focuse?'focuse iconfont iconsearch':'iconfont iconsearch'} ></i>
                  </NavSearchBox>
            </Nav>
            <Addition>
                <Button className='writting'>
                  <i className ='iconfont iconbiji'></i>
                写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWapper>
    );
  }
  inputFocus () {
    this.setState( {
      focuse:true
    })
  }
  inputBlur () {
    this.setState( {
      focuse:false
    })
  }
}

export default Header;
