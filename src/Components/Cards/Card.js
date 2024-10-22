
import styled from 'styled-components'
import { BASE_URL } from '../../Views/Home/Home';


function Card({ data }) {

    return (
        <>
            <Cards>
                {
                    data?.map(({ image, name, price, text, type }) => (
                        <FoodCard key={type}>
                            <div>
                                <div className='image'>
                                    <img src={BASE_URL + image} alt='img' />
                                </div>

                                <div className='name'>
                                    {
                                        name
                                    }

                                </div>

                                
                            </div>
                        </FoodCard>
                    ))
                }
            </Cards>
        </>
    )
}

export default Card;

const Cards = styled.div`

`;

const FoodCard = styled.div`
width: 350px;
border:1px solid red;
font-size: 1vw;
padding: 1vw;
margin: 1vw;
border-radius: 5px;
font-size: 1vw;

.image{
    img{
        width: 10vw;

    }
}

div{
    display: flex;

}

.name{
    display: block;
    border: 1px solid yellow;
}
`;