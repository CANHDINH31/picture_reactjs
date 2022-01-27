import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'

import Api from '../hooks/Api'

function DetailPicture() {
    const { id } = useParams();
    const [state, setState] = useState({})
    const [error, setError] = useState(false);
    const fetchInfo = async (id) => {
        try {
          setError(false);
          const result = await Api.fetchInfo(id)
          const link = "https://apipcd.herokuapp.com" + result[0].image;
          setState({ ...result[0],link })
    
    
        } catch (error) {
          setError(true);
        }
      }
    
      useEffect(() => {
        fetchInfo(id);
      }, [])
    return (
        <>
         <Container>
            <Wrapper> 
                <Content>
                    <Img src={state.link} alt="" />
                    <Text>
                        <p className='name'>{state.name}</p>
                        <h3>Thể loại: {state.category}</h3>
                        <p>Kích thước: Quý khách có thể đặt theo yêu cầu</p>
                        <p>Miễn phí tư vấn bởi họa sĩ - chuyên gia trang trí nội thất</p>
                        <p>Tư vấn treo tranh: 0975.146.588</p>
                        <p>Nhận tranh sau 7 - 10 ngày</p>
                        <div className='rating-director'>
                            <div>
                                <h3>Giá</h3>
                                <div className="score">{state.price}</div>
                            </div>
                            <div className="director">
                                <h3>Tác Giả</h3>
                                <p>{state.author}</p>
                            </div>
                        </div>
                    </Text>
                </Content>
            </Wrapper>
        </Container>
        </>
    )
       
}

export default DetailPicture;

const Container = styled.div`
    margin-top:70px;
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    display:flex;
    align-items:center;

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
const Wrapper = styled.div`
    
    width: 100%;
    background-size:contain;
    background-position:center;
    animation: animatePicture 1s;
    opacity:0.85;
    @keyframes animatePicture {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
   
`
const Content = styled.div`
    width:100%;
    display:flex;
    margin:0 auto;
    background: rgba(0,0,0,0.7);
    border-radius:20px;
 
    @media screen and  (max-width: 768px){
        display:block;
        margin-bottom:20px;
        
    }
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`

const Img = styled.img`
    display:block;
    max-height: 450px;
    min-width:418px;
    object-fit:cover;
    object-position:center;
    border-radius:20px;
        @media screen and  (max-width: 768px){
            width:100%;
            height: 300px;
            min-width:unset;
        }
`
const Text = styled.div`
    width:100%;
    padding:20px 40px;
    color:white;
    overflow: hidden;

    .rating-director{
        display:flex;
        justify-content: flex-start;
        flex-wrap:nowrap;
    }

    .score {
        display:flex;
        align-items:center;
        justify-content:center;
        padding:4px 16px;
        background: white;
        color:black;
        font-size:1.0rem;
        font-weight:500;
        border-radius:20px;
        margin:0;

    }

    .director{
        margin:0 0 0 40px;
        p{
            margin:0;
            font-size:1.0rem;

        }
    }

    .name {
        font-size:1.8rem;
        font-weight:600;
        @media screen and (max-width:768px){
            font-size:1.5rem;
        }
    }

    h3{
        font-weight:600
    }
`