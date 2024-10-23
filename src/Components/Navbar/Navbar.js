import React, { useState } from 'react';
import styled from 'styled-components';
import Foodlogo from './image/logo.png';
// import { type } from '@testing-library/user-event/dist/type';

function Navbar(data) {
    let filterbtns =[
        {
            name:"All",
            type:"all"
        },
        {
            name:"Breakfast",
            type:"breakfats"
        },
        {
            name:"Lunch",
            type:"lunch"
        },
        {
            name:"Dinner",
            type:"dinner"
        }
    ];
    
    let arr = Object.values(data);
    const [filterdata, setFilterData] = useState("");
    const Search = (e) => {
        const searchvalue = e.target.value;
        if (searchvalue === "") {
            setFilterData(null);
        }
        const filter = arr?.filter((food) => food.name.toLowerCase().includes(searchvalue.toLowerCase()));
        setFilterData(filter);
    }

    return (
        <>
            <Container>
                <TopContainer>
                    <div className='logo'>
                        <img src={Foodlogo} alt='logoIcon' />
                    </div>

                    <div className='search'>
                        <input onChange={Search}
                            placeholder='Search Food...'
                        />
                    </div>
                </TopContainer>

                <ButtonContainer>
                    {/* {
                        filterbtns.map((button) => (
                            <Button key={button.name} onClick={()=>{filterFood(button.type)}}>
                                {buttonname}
                            </Button>
                        ))
                    } */}
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

export const Button = styled.button`
    background-color:#ff4343;
    color: #FFFFFF;
    border-radius: 5px;
    padding: 0.8vw 0.8vw;
    border: none;
    margin-top: 1vw;
`;