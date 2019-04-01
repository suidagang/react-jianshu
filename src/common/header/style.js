import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWapper = styled.div`
    position:relative;
    height: 58px;
    width: 100%;
    border-bottom:1px solid #f0f0f0;
`;
export const NavSearchBox = styled.div`
    position:relative;
    float:left;
    
    .zoom{
        position:absolute;
        right:7px;
        bottom:5px;
        width:30px;
        height:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        color:#969696;
        &.focuse{
            background:#777;
            color:#fff;
        }
    }
    
    
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
    height:38px;
    border:none;
    padding:0 20px;
    box-sizing:border-box;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    font-size:14px;
    margin-left:20px;
    &::placeholder{
        color:#999;
    }
    &.focuse{
        width:260px;
    }
    &.fade-enter{
        transition:all .4s ease;
    }
    &.fade-enter-active{
        width:240px;
    }
    &.fade-exit{
        transition:all .4s ease;
    }
    &.fade-exit-active{
        width:160px;
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
export const SearchInfo = styled.div`
   position:absolute;
   left:20px;
   top:56px;
   width:240px;
   
   padding:0 20px;
   background-color: #fff;
   box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
   margin-top:20px;
   margin-bottom:15px;
   line-height:20px;
   font-size:14px;
   color:#969696;
`
export const SearchInfoSwitch = styled.span`
   float:right;
   font-size:14px;
   cursor:pointer;
   &:hover{
       color:#333;
       .spin{
           color:#333;
       }
   }
   .spin{
       display:inline-block;
       font-size:12px;
       margin-right:3px;
       color:#969696;
       transition:all 0.2s ease-in;
       transform-origin:center center;
   }
`
export const SearchInfoItem = styled.a`
   float:left;
   font-size:12px;
   padding:0 5px;
   line-height:20px;
   border:1px solid #ddd;
   color:#787878;
   border-radius:3px;
   display:block;
   margin-right:10px;
   margin-bottom:10px;
`