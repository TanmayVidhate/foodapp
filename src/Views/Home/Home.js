import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import styled from 'styled-components';
function Home() {
    return (
        <>
            <Navbar />
            <CardHolder>

            </CardHolder>
        </>
    )
}

export default Home;


const CardHolder = styled.div`
height: calc(100vh - 170px);
background-image: url("./banner.png");
background-size: cover;
border: 1px solid yellow;
`;