import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

import Api from '../hooks/Api'
import Spinner from './Spinner';



function ListDetail() {
    const initialState = {
        page: 0,
        data: [{
        }]
    }
    const { params } = useParams();
    const [text, setText] = useState({})
    const [error, setError] = useState(false);
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchPictures = async (type, page) => {
        try {
            setError(false);
            setLoading(true);
            const pictures = await Api.fetchDetail(type, page);
            setState(prev => ({
                page,
                data:
                    page > 1 ? [...prev.data, ...pictures] : [...pictures]
            }))


        } catch (error) {
            setError(true);
            console.log(error)

        }
        setLoading(false);
    }



    const fetchCategory = async (category) => {
        try {
            setText(false);
            const result = await Api.fetchCategory(category)
            const link = "https://apipcd.herokuapp.com"+result[0].image;
            setText({ ...result[0],link })


        } catch (error) {
            setError(true);
        }
    }

    useEffect(() => {
        fetchPictures(params, 1);
    }, [])

    console.log(state)
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchPictures(params,state.page + 1);

        setIsLoadingMore(false);
    }, [isLoadingMore])


    useEffect(() => {
        fetchCategory(params);
    }, [])
    console.log(text);
    return (
        <Container>
            <WrapHeader>
                <Text>
                    <Title>
                        {text.title}
                    </Title>
                    <Detail>
                        {text.detail}
                    </Detail>
                    <ImgLogo>
                        <img src="/images/logo.png" />
                    </ImgLogo>
                </Text>
                <ImgHeader>
                    <img src={text.link} />
                </ImgHeader>

            </WrapHeader>
            <WrapContent>
                <h2>Hình ảnh tham khảo</h2>

                <Content >
                    {state.data.map((picture, index) => {
                        const link = "https://apipcd.herokuapp.com/" + picture.image;
                        const href = "/detailinfo/"+picture._id;
                        
                        return (

                            <Wrap key={index} >
                                <a href={href}><img src={link} /></a>
                            </Wrap>

                        )
                    })}
                </Content>

                {loading && <Spinner />}
                {!loading && <Button onClick={() => {
                    setIsLoadingMore(true)
                }}>Xem Thêm</Button>}


            </WrapContent>

        </Container>
    );
}

export default ListDetail;

const Container = styled.div`
    margin-top:70px;
    overflow-x:hidden;
    padding:50px calc(3.5vw + 5px);
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
const WrapHeader = styled.div`
    display:flex;
    justify-content:space-between;
`

const Text = styled.div`
    padding-right:40px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    @media(max-width:768px){
        padding:0;
    }
`
const Title = styled.div`
    color:white;
    font-size:1.8rem;
    font-weight:500;
    letter-spacing:1px;
    text-shadow:0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
    @media(max-width:768px){
        font-size:1.2rem;
        letter-spacing:unset;
    }
`
const Detail = styled.div`
    font-size:1.0rem;
    letter-spacing:0.8px;
    word-spacing:1.4px;
    font-weight:400px;
    @media(max-width:768px){
        font-size:0.8rem;
        letter-spacing:unset;
        margin-top:20px;
    }
`

const ImgHeader = styled.div`
    @media(max-width:768px){
        display:none;
    }
    img {
        display:block;
        width:600px;
        object-fit:cover;
        object-position:center;
        border: 4px solid transparent;
        border-radius:4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration:300ms;
    }

    img:hover {
      border: 4px solid rgba(249,249,249,0.8);
    }
`

const ImgLogo = styled.div`
    padding-right:60px;
    display:flex;
    justify-content:flex-end;
    img{
        display:block;
        width:200px;
        @media(max-width:768px){
            width:150px;
    }
    }
    @media(max-width:768px){
        padding-right:20px;
    }
`

const WrapContent = styled.div`
    
`

const Content = styled.div`
    display:grid;
    padding:10px 10px;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    @media(max-width:768px){
        padding:unset;
        grid-template-columns:repeat(1,minmax(0,1fr));
         grid-gap:25px;
        
    }
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
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    
    @media(max-width:768px){
        width:85%;
    }


    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }

`