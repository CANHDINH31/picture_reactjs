import React, { useEffect } from 'react';
import styled from 'styled-components';
import Map from './Map';

import Aos from 'aos'
import "aos/dist/aos.css"


function Address() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <Container>
            <Wrap>
                <Text data-aos="fade-up" >
                    <Text1>
                        Bản đồ đến với Mỹ thuật Đông Anh
                    </Text1>
                    <Text2>
                        Địa chỉ : Đại Mạch, Đông Anh, Hà Nội<br />
                        Điện thoại: 0975.146.588<br />
                        Email: Mythuatdonganh@gmail.com
                    </Text2>
                    <Text3>
                        <p>Cửa hàng mở cửa từ 8h30 đến 6h30 mỗi ngày, kể cả Thứ 7 và Chủ Nhật. Tất cả các mẫu khung đang có trên website đều có sẵn tại shop. Các mẫu tranh được vẽ bởi họa sĩ của chúng tôi vui lòng qua cửa hàng xem hoặc liên hệ trước với chúng tôi. Rất hạnh phục vụ quý khách.</p>
                    </Text3>
                    <Text3>
                        Quý khách có thể dễ dàng tìm trên bản đồ.
                    </Text3>
                </Text>
                <WrapMap>
                    <Map height={450}
                        width={600}/>
                </WrapMap>
                <Img>
                    <img src="/images/introduce-4.jpg" alt="" />
                </Img>
            </Wrap>


        </Container >
    )
}

export default Address;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    overflow-x: hidden;   
    padding:0 calc(3.5vw + 5px);
    margin-top:70px;
    padding-top:50px;
    position: relative;
    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content:"";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
    
`
const Wrap = styled.div`
    width:90%;
    margin:0 auto;
    display: flex;
    justify-content:space-around;
    @media(max-width:768px){
        flex-direction:column;
        width: 100%;
        
    }

`
const Text = styled.div`
    padding:0 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin-right:40px;
    @media(max-width:768px){
        padding:0;
        margin-right:0;
        
    }


    
    
`

const Text1 = styled.span`
    color:white;
    font-size:1.6rem;
    font-weight:500;
    letter-spacing:1px;
    text-shadow:0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
    @media(max-width:768px){
        font-size:1.4rem;
        letter-spacing:0.6px;

        
        
    }

`

const Text2 = styled.div`
    font-size:1.0rem;
    letter-spacing:0.8px;
    word-spacing:1.4px;
    font-weight:400px;
    @media(max-width:768px){
        margin:10px 0;
    }
    

`

const Text3 = styled.div`
    font-size:1.0rem;
    letter-spacing:0.8px;
    word-spacing:1.4px;
    @media(max-width:768px){
        margin-bottom:10px;
    }
`
const WrapMap = styled.div`
    @media(max-width:768px){
        display:none;
    }
`

const Img = styled.div`
    display:none;
    @media(max-width:768px){
        display:unset;
        margin:30px 0;
        border-radius:10px;
        overflow:hidden;
        border: 3px solid rgba(249,249,249,0.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        img {
            display:block;
            width: 100%;
            margin:0 auto;
        }
        &:hover{
            transform: scale(1.05);
            border-color:rgba(249,249,249,0.8);
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        }
    }
`


