import React from 'react';
import styled from 'styled-components';

function GoToTop({ onClick }) {

  return (
    <Container onClick={onClick}>
      <img src="/images/top-icon.svg"></img>
    </Container>
  );
}

export default GoToTop;

const Container = styled.div`
    position:fixed;
    bottom:100px;
    left:20px;
    background: rgba(18,92,158,0.7);
    border-radius: 20px;
    padding: 4px 8px;
    color: #fff;
    border: 2px solid #ccc;
    font-size:16px;
    cursor:pointer;
    @media(max-width:768px){
      bottom:100px;
    }

    

`


