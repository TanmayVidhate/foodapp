import React from 'react';
import styled from 'styled-components';
import Foodlogo from './image/logo.png'
function Navbar() {
    return (
        <>
            <MainContainer>
                <TopContainer>
                    <div className='logo'>
                        <img src={Foodlogo} alt='logoIcon' />
                    </div>

                    <div className='search'>
                        <input
                            placeholder='Search Food...'
                        />
                    </div>
                </TopContainer>
            </MainContainer>
        </>
    )
}

export default Navbar;


const MainContainer = styled.div`
 background-color:rgb(50, 51, 52);
`;
const TopContainer = styled.section``;