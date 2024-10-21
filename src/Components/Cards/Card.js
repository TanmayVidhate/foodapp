import React from 'react'
import styled from 'styled-components'
function Card() {
    return (
        <>
            <Cards>

                <div className='cards_image'>

                </div>

                <div className='food_info'>
                    <div className='card_title'>XYz</div>
                    <div className='card_descp'>lo</div>
                </div>
            </Cards>

        </>
    )
}

export default Card;

const Cards = styled.div`
width: 300px;
border:1px solid red;
font-size: 1vw;
padding: 1vw;
border-radius: 5px;
`;