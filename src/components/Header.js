import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Nav>
            <Logo src="/images/logo.png" />
            <NavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg" />
                    <span>TRANG CHỦ</span>
                </a>

                <a href="/introduce">
                    <img src="/images/introduce-icon.svg" />
                    <span>GIỚI THIỆU</span>
                </a>

                <a href='/address'>
                    <img src="/images/address-icon.svg" />
                    <span>ĐỊA CHỈ</span>
                </a>      
            </NavMenu>
            <RightMenu>  
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="/general/tranhphongcanh">Tranh Phong Cảnh</a></li>
                <li><a href="/general/tranhvetuong" >Tranh Vẽ Tường</a></li>
                <li><a href="/general/tranhdongque">Tranh Đồng Quê</a></li>
                <li><a href="/general/tranhhoa">Tranh Hoa</a></li>
                <li><a href="/general/tranhtrangtri">Tranh Trang Trí</a></li>
                <li><a href="https://zalo.me/0975146588" target="_blank">Liên Hệ Zalo</a></li>
                <li><a href="https://www.facebook.com/cong.pham.5680" target="_blank">Liên Hệ FaceBook</a></li>
            </BurgerNav>
        </Nav>
    )
}

export default Header;

const Nav = styled.div`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x:hidden;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:10;
    @media(max-width:768px){
        padding:0;
        justify-content:space-around;
    }
`

const Logo = styled.img`
    width: 120px;
    @media(max-width:768px){
        display:none;
    }

`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:60px;
    align-items:center;
    @media(max-width:768px){
        margin-left:0px; 
        flex:unset;            
            }
    a{
        display:flex;
        align-items:center;
        padding: 0 20px;
        cursor:pointer;

       
        
        img{
            height:20px;
            margin-right:4px;
            @media(max-width:768px){
                display:none;
            }
        }

        span {
            text-transform:uppercase;
            font-size:16px;
            letter-spacing:1.42px;
            position: relative;

            &:after{
                content:"";
                height: 2px;
                background: white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform:scaleX(0);
            }
            @media(max-width:768px){
                font-size:14px;
                letter-spacing:unset;
            }
        }

        &:hover{
            span:after {
                opacity:1;
                transform:scaleX(1); 
            }
        }
        
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width: 300px;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);
        a{
            font-weight:600;
            color:black;
        }
    }

`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
    color:black;

`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    
`