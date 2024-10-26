import React, { useState } from 'react';
import styled from 'styled-components';
import Foodlogo from './image/logo.png';
// import { type } from '@testing-library/user-event/dist/type';

function Navbar({searchBarData}) {

    const [searchData, setSearchData] = useState("");

    function sendData() {
        const filter = FoodItemsInfo?.filter((food) => food.name.toLowerCase().includes(searchData.toLowerCase()));
        searchBarData(searchData, filter);
        // console.log("navbar data==",searchData);
    }

    let filterbtns = [
        {
            name: "All",
            type: "all"
        },
        {
            name: "Breakfast",
            type: "breakfats"
        },
        {
            name: "Lunch",
            type: "lunch"
        },
        {
            name: "Dinner",
            type: "dinner"
        }
    ];

    const FoodItemsInfo = [
        {
            "name": "Boilded Egg",
            "price": 10,
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            "image": "/images/egg.png",
            "type": "breakfast"
        },
        {
            "name": "RAMEN",
            "price": 25,
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            "image": "/images/ramen.png",
            "type": "lunch"
        },
        {
            "name": "GRILLED CHICKEN",
            "price": 45,
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            "image": "/images/chicken.png",
            "type": "dinner"
        },
        {
            "name": "CAKE",
            "price": 18,
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            "image": "/images/cake.png",
            "type": "breakfast"
        },
        {
            "name": "BURGER",
            "price": 23,
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            "image": "/images/burger.png",
            "type": "lunch"
        },
        {
            "name": "PANCAKE",
            "price": 25,
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            "image": "/images/pancake.png",
            "type": "dinner"
        }
    ];

    return (
        <>
            <Container>
                <TopContainer>
                    <div className='logo'>
                        <img src={Foodlogo} alt='logoIcon' />
                    </div>

                    <div className='search'>
                        <input type='search'
                            onChange={(e) => { setSearchData(e.target.value); sendData() }}
                            placeholder='Search Food...'
                        />
                    </div>
                </TopContainer>

                {/* <ButtonContainer>
                    {
                        filterbtns.map((name,type) => (
                            <Button key={name} onClick={()=>{filterFood(type);setButtonName(name)}}>
                                {buttonName}
                            </Button>
                        ))
                    }
                </ButtonContainer> */}
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