import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'

import Api from '../hooks/Api'


function General() {
  const { params } = useParams();
  const [state, setState] = useState({})
  const [error, setError] = useState(false);
  const link = '/detail/' + params;
  const fetchCategory = async (category) => {
    try {
      setError(false);
      const result = await Api.fetchCategory(category)
      const link = "https://apipcd.herokuapp.com" + result[0].image;
      setState({ ...result[0] ,link})


    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchCategory(params);
  }, [])

  return (
    <Container>
      <Background>
        <img src={state.link} />
      </Background>
      <ImageTitle>
        <img src="/images/logo.png" />
      </ImageTitle>
      <h2>{state.name}</h2>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span><a href={link}>Xem Tranh</a></span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/contact-icon.svg" />
          <span>0975.146.588</span>
        </TrailerButton>
      </Controls>
      <SubTitle>
        Tác giả: Phạm Công, Mỹ thuật Đông Anh
      </SubTitle>
      <Description>
        {state.description}
      </Description>
    </Container>
  );
}

export default General;

const Container = styled.div`
  min-height:calc(100vh - 70px);
  padding:0 calc(3.5vw + 5px);
  position: relative;
  margin-top:70px;

`
const ImageTitle = styled.div`
    height:30vh;
    min-height:170px;
    width:35vw;
    min-width:200px;
    img {
      width:100%;
      height:100%;
      object-fit:contain;
    }
   
`

const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;

    img{
      width: 100%;
      height:100%;
      object-fit:cover;
      object-position:center;
      /* margin-top:60px; */
    }
`





const Controls = styled.div`
  display:flex;
  align-items:center;
`

const PlayButton = styled.button`
  border-radius:4px;
  padding:0px 16px;
  margin-right:22px;
  display:flex;
  align-items:center;
  height:56px;
  background:rgb(249,249,249);
  border:none;
  cursor:pointer;
  outline:none;
  
  img {
    width: 26px;
    height:26px;
    margin-right:10px;
  }

  &:hover{
    background:rgb(198,198,198)
  }

  span a {
      color:black;
      font-size:15px;
      letter-spacing:1.8px;
      @media(max-width:768px){
        font-size:1.2rem;
      }
    }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border:1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  text-transform:uppercase;
  span{
    font-size:1.2rem;
  }
`




const SubTitle = styled.div`
  color:rgb(249,249,249);
  font-size:18px;
  min-height:20px;
  margin-top:26px;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3)
`

const Description = styled.div`
    line-height:1.4;
    font-size:24px;
    margin-top:16px;
    color:rgb(249,249,249);
    max-width:768px;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3)
`