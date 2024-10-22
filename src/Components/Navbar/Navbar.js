import React from 'react';
import styled from 'styled-components';
import Foodlogo from './image/logo.png'
function Navbar() {
    return (
        <>
            <Container>
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

                <ButtonContainer>
                    <Button>All</Button>
                    <Button>Breakfast</Button>
                    <Button>Lunch</Button>
                    <Button>Dinner</Button>
                </ButtonContainer>
            </Container>
        </>
    )
}

export default Navbar;


const Container = styled.div`
 margin:0 auto ;
 /* border: 1px solid red; */
`;
const TopContainer = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
height: 5vh;
padding: 1vw;

.search{
    input{
        border: 1px solid red;
        color: white;
        padding: 0.8vw;
        font-size: 1.2vw;
        border-radius:5px;
        background-color: transparent;
    }
}
`;
const ButtonContainer = styled.section`
display: flex;
justify-content: center;
gap: 1vw;
padding-bottom: 1vw;
`;

const Button = styled.button`
    background-color:#ff4343;
    color: #FFFFFF;
    border-radius: 5px;
    padding: 1vw 1vw;
    border: none;
`;