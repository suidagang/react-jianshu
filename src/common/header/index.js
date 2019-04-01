import React,{Component} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {HeaderWapper,Logo,Nav,NavItem,NavSearch,Addition,Button,NavSearchBox,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem} from './style';

class Header extends Component {
    getListArea () {
        // 优化
        const { focuse , list , mouseIn , page , total, totalPage ,handerMouseEnter,handerMouseLeave,handerPageChange} = this.props;
        const pageList = [];
        const newList = list.toJS();
        if(newList.length){
            for ( let i = ( (page-1) * 10 );i < ( page  * 10 > total?total: page * 10); i++){
                pageList.push(
                    <SearchInfoItem key = {newList[i]} >{newList[i]}</SearchInfoItem>
                )
            };
        };
        if(focuse || mouseIn){
            return (
                <SearchInfo onMouseEnter = {handerMouseEnter} onMouseLeave = {handerMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = {() => handerPageChange(page,totalPage,this.spinIcon)}>
                            <i ref={(icon) =>{ this.spinIcon = icon}} className ='iconfont iconspin spin'></i>
                            换一批 
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>{ pageList }</div>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render () {
        // 优化
        const { focuse  ,inputBlur,inputFocus ,list} = this.props;
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
                        in={ focuse }
                        timeout={ 200 }
                        classNames='fade'>
                            <NavSearch onBlur = {inputBlur} onFocus = { () =>inputFocus(list)} className={focuse?'focuse':''}></NavSearch>
                        </CSSTransition>
                        <i className={focuse?'focuse iconfont iconsearch zoom':'iconfont iconsearch zoom'} ></i>
                        {this.getListArea(focuse)}
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
    }
 }
const mapStateToProps = (state) => {
    return {
        //immutable 两种写法
        focuse:state.get('header').get('focuse'),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        total:state.getIn(['header','total']),
        mouseIn:state.getIn(['header','mouseIn']),
    }
}
const mapDispathToProps = (dispatch) => {
  return {
    inputFocus (list) {
        if(list.size <= 0){
            dispatch(actionCreators.getList());
        };
        dispatch(actionCreators.searchFocuse());
    },
    inputBlur () {
        dispatch(actionCreators.searchBlur());
    },
    handerMouseEnter () {
        dispatch(actionCreators.mouseEnter())
    },
    handerMouseLeave () {
        dispatch(actionCreators.mouseLeave())
    },
    handerPageChange (page,totalPage,spinIcon) {
        let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'');
        if(originAngle) {
            originAngle = parseInt(originAngle,10);
        }else{
            originAngle = 0;
        };
        spinIcon.style.transform = 'rotate('+(originAngle+360)+'deg)';
        if(page<totalPage){
            dispatch(actionCreators.changePage((page+1)));
        }else{
            dispatch(actionCreators.changePage(1))
        };
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps) (Header);
