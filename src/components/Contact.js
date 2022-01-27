import React from 'react';
import styled from 'styled-components';

function Contact() {
    return (
        <Container>
            <Wrap>
                <a href='https://zalo.me/0975146588' target="_blank">Liên hệ Zalo</a>
            </Wrap>
            <Wrap>
                <a href="https://www.facebook.com/cong.pham.5680" target="_blank">Liên hệ Facebook</a>
            </Wrap>
        </Container>
    )
}

export default Contact;

const Container = styled.div`
    position:fixed;
    bottom:20px;
    left:20px;
    @media(max-width:768px){
      display:none;
    }
`

const Wrap = styled.div`
        margin-top:30px;

    a{
        background: #d11a59;
        border-radius: 20px;
        padding: 2px 24px;
        color: #fff;
        border: 2px solid #ccc;
        font-size:16px;
        cursor:pointer;
        @media(max-width:768px){
             padding: 8px 38px;
            
        }
    }

    a:hover{
        opacity:0.85;
    }
`
