import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWapper = styled.div`
    position:relative;
    height: 58px;
    width: 100%;
    border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    dispaly:block;
    height: 56px;
    width: 100px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-rigt:70px;
    box-sizing:border-box;
`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    height:30px;
    border:none;
    padding:0 20px;
    box-sizing:border-box;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:14px;
    font-size:14px;
    margin-left:20px;
    &::placeholder{
        color:#999;
    }
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
   &.left {
       float:left;
   }
   &.right{
       float:right;
       color:$969696;
   }
   &.active{
       color:#ea6f5a;
   }
`;