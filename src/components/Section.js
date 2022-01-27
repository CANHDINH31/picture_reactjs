import React,{useEffect} from 'react'
import styled from 'styled-components'

import Aos from 'aos'
import "aos/dist/aos.css"

function Section({ title,
    backgroundImg,
    leftBtnText,
    rightBtnText }) {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (

        <Wrap  bgImage={backgroundImg}>
            <ItemText data-aos="fade-up">
                <p>{title}</p>
            </ItemText>
            <Buttons data-aos="fade-up">
                <ButtonGroup>
                    <LeftButton>
                        <p>{leftBtnText}</p>
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            <p>{rightBtnText}</p>
                        </RightButton>
                    }

                </ButtonGroup>
            </Buttons>
            <DownArrow src="/images/down-arrow.svg">
            </DownArrow>
        </Wrap>




    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position:center  ;
    background-repeat: no-repeat;
    background-image:${props => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    
    
    p{  padding:10px;
        font-size:2.8rem;
        font-weight:500;
        background:#333333;
        @media(max-width:768px){
            font-size:1.6rem;        
        }
    }
    
    

`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width: 768px){
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    padding:0px 24px;
    min-width:280px;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:100px;
    text-transform: uppercase;
    cursor:pointer;
    margin:8px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all linear 0.15s;
    p{
        font-size:1.0rem;
        color:white;
        font-weight:bold;
        @media(max-width:768px){
            font-size:1.2rem;        
        }

    }
    &:hover{
        background:rgba(198,198,198,0.8)
    }
    &:hover p{
        color:black;
    }

    

`

const RightButton = styled(LeftButton)`
    
`

const DownArrow = styled.img`
    
    height:40px;
    animation: animateDown infinite 1.5s;
    
}

`

const Buttons = styled.div`

`
