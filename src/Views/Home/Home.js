import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import styled from 'styled-components';
import BgImg from './image/banner.png'
function Home() {
    return (
        <>
            <Navbar />
            <CardHolder>
                <img src={BgImg} alt='banner' />
            </CardHolder>
        </>
    )
}

export default Home;


const CardHolder = styled.div`
height: calc(100vh - 174px);
border: 1px solid yellow;

img{
    height: 100%;
    width: 100%;
    object-fit:cover;
}
`;