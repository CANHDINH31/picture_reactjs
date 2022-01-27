import React, { useState } from 'react';
import styled from 'styled-components';


function Map({height,width}) {
    return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3721.7992661048966!2d105.75236806607879!3d21.120567581382293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stieu%20hoc%20dai%20mach!5e0!3m2!1svi!2s!4v1643077840556!5m2!1svi!2s" width={width} height={height}  allowFullScreen="" loading="lazy"></iframe>
    )
}


export default Map;







