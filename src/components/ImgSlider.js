import React from 'react';

import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-1.png" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-2.png" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-3.png" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-4.png" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-5.png" />
            </Wrap>
        </Carousel>
    );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  @media(max-width:768px){
        display:none;
    }
  margin-top:90px;

  ul li button {
    &:before {
      font-size:10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before{
    color:white;
  }

  .slick-list{
    overflow:visible;
  }

  button {
    z-index:1;
  }
`

const Wrap = styled.div`
  cursor:pointer;
  img{
    border: 4px solid transparent;
    display:block;
    width: 100%;
    height:50%;
    border-radius:4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:300ms;

    &:hover {
      border: 4px solid rgba(249,249,249,0.8);
    }
  }
`