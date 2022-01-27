import React from 'react';
import styled from 'styled-components'
import Section from './Section'
function Introduce() {
    return (
        <Container>
            <Section
                title="Hơn 500 + Mẫu Tranh"
                backgroundImg="introduce-2.jpg"
                leftBtnText="Đẹp nhất - mới nhất"
                rightBtnText="Luôn luôn cập nhật"
            />
            <Section
                title="Kích Thước Theo Yêu Cầu"
                backgroundImg="introduce-1.jpg"
                leftBtnText="Đảm bảo sự hài hòa"
                rightBtnText="Phụ hợp với nội thất"
            />
            <Section
                title="Mua Tranh Trực Tiếp"
                backgroundImg="introduce-3.jpg"
                leftBtnText="Giá cả hợp lý"
                rightBtnText="Chất lượng cao"
            />
            <Section
                title="Đội Ngũ Làm Việc & Tư Vấn"
                backgroundImg="introduce-4.jpg"
                leftBtnText="Hỗ trợ nhiệt tình"
                rightBtnText="Chăm chỉ sáng tạo"
            />
            <Section
                title="Bạn Sẽ Nhận Được Nhiều Ưu Đãi"
                backgroundImg="introduce-5.jpg"
                leftBtnText="Tư vấn phong thủy"
                rightBtnText="Tri ân khách hàng"
            />
        </Container>
    );
}

export default Introduce;

const Container = styled.div`
    margin-top:70px;
    min-height:calc(100vh - 70px);
    position: relative;
    overflow-x: hidden;

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