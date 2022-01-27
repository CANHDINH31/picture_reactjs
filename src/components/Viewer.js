import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


function Viewer() {
    return (
        <Container>
            <Wrap>
                <Link to={`/general/tranhphongcanh`}>
                    <img src="/images/viewers-1.png" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to={`/general/tranhdongque`}>
                    <img src="/images/viewers-2.png" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to={`/general/tranhtrangtri`}>
                    <img src="/images/viewers-3.png" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to={`/general/tranhhoa`}>
                    <img src="/images/viewers-4.png" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to={`/general/tranhvetuong`}>
                    <img src="/images/viewers-5.png" />
                </Link>
            </Wrap>
            
        </Container>
    )
}

export default Viewer;

const Container = styled.div`
    @media(max-width:768px){
        margin-top:70px;
        grid-gap:25px;
        grid-template-columns:repeat(1,minmax(0,1fr));
    }
    margin-top:30px;
    display:grid;
    padding:30px 0px 26px;
    grid-gap:25px;
    grid-template-columns:repeat(5,minmax(0,1fr));

`

const Wrap = styled.div`
    border: 3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    cursor:pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }


`