import React,{Component} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {HeaderWapper,Logo,Nav,NavItem,NavSearch,Addition,Button,NavSearchBox,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem} from './style';

class Header extends Component {
    getListArea () {
        // 优化
        const { focuse , list } = this.props;
        if(focuse){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </div>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render () {
        // 优化
        const { focuse , list ,inputBlur,inputFocus} = this.props;
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
                            <NavSearch onBlur = {inputBlur} onFocus = {inputFocus} className={focuse?'focuse':''}></NavSearch>
                        </CSSTransition>
                        <i className={focuse?'focuse iconfont iconsearch':'iconfont iconsearch'} ></i>
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
        list:state.getIn(['header','list'])
    }
}
const mapDispathToProps = (dispatch) => {
  return {
    inputFocus () {
        dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocuse());
    },
    inputBlur () {
        dispatch(actionCreators.searchBlur());
    }

  }
}
export default connect(mapStateToProps,mapDispathToProps) (Header);
