import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Spinner from './Spinner';
import DetailPicture from './DetailPicture';
import { FetchData } from '../hooks/FetchPicture'

import Aos from 'aos';
import "aos/dist/aos.css"

function Pictures() {
    const { state, loading, error, setIsLoadingMore } = FetchData();
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <Container>
            <h2>Một số mẫu tranh dành cho bạn</h2>

            <Content >
                {state.data.map((picture, index) => {
                    const link = "https://apipcd.herokuapp.com/" + picture.image;
                    const href = "/detailinfo/"+picture._id;
                    return (

                        <Wrap data-aos="fade-up" key={index} >
                            <a href={href}><img src={link}/></a>
                        </Wrap>

                    )
                })}

            </Content>

            {loading && <Spinner />}
            {!loading && <Button onClick={() => {
                setIsLoadingMore(true)
            }}>Xem Thêm</Button>}


        </Container>
    );
}

export default Pictures;


const Container = styled.div`

`

const Content = styled.div`
    @media(max-width:768px){
        grid-template-columns:repeat(1,minmax(0,1fr));
        grid-gap:0px;
        padding:0;

    }
    display:grid;
    padding:10px 10px;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    
`

const Wrap = styled.div`
        width:90%;
        border-radius:10px;
        overflow:hidden;
        border: 3px solid rgba(249,249,249,0.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;


        @media(max-width:768px){
            width: 100%;
            margin-top:32px;

        }
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }

        &:hover{
            transform: scale(1.05);
            border-color:rgba(249,249,249,0.8);
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        }
`

const Button = styled.button`
    display:block;
    background: transparent;
    width:25%;
    min-width:200px;
    height:60px;
    border-radius:30px;
    color:white;
    border: 3px solid rgba(249,249,249,0.1);
    font-size:1.5rem;
    margin:20px auto;
    outline:none;
    cursor:pointer;

    @media(max-width:768px){
        width:100%;
        
    }

    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }

    

`
