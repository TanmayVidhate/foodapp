import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import styled from 'styled-components';
// import BgImg from './image/banner.png'
import Card from '../../Components/Cards/Card.js';
function Home() {
    return (
        <>
            <Navbar />
            <CardWrapper>
                <Card />
            </CardWrapper>
        </>
    )
}

export default Home;


const CardWrapper = styled.div`
height: calc(100vh - 178px);
/* border: 1px solid yellow; */
background-image: url("banner.png");
background-size: cover;

`;