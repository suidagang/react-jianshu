import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {HeaderWapper,Logo,Nav,NavItem,NavSearch,Addition,Button,NavSearchBox,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem} from './style';

const getListArea = (show) =>{
    if(show){
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育是</SearchInfoItem>
                    <SearchInfoItem>教育猪</SearchInfoItem>
                    <SearchInfoItem>教育放假</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育狗</SearchInfoItem>
                    <SearchInfoItem>教育烦死我</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育猫</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </div>
            </SearchInfo>
        )
    }else{
        return null;
    }
}
const Header = (props) => {
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
                in={ props.focuse }
                timeout={ 200 }
                classNames='fade'>
                    <NavSearch onBlur = {props.inputBlur} onFocus = {props.inputFocus} className={props.focuse?'focuse':''}></NavSearch>
                </CSSTransition>
                <i className={props.focuse?'focuse iconfont iconsearch':'iconfont iconsearch'} ></i>
                {getListArea(props.focuse)}
            </NavSearchBox>
        </Nav>
        <Addition>
            <Button className='writting'>
                <i className ='iconfont iconbiji'></i>
            写文章</Button>
            <Button className='reg'>注册</Button>
        </Addition>
    </HeaderWapper>
  )
};
const mapStateToProps = (state) => {
  return {
    focuse:state.get('header').get('focuse')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    inputFocus () {
      dispatch(actionCreators.searchFocuse());
    },
    inputBlur () {
      dispatch(actionCreators.searchBlur());
    }

  }
}
export default connect(mapStateToProps,mapDispathToProps) (Header);
