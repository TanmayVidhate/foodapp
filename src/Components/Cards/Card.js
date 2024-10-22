
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
                                    <h3>{name}</h3>
                                    <div className='text'>
                                        {text}
                                    </div>

                                    <div className='btn'>
                                        <button>
                                            {price}
                                        </button>
                                    </div>
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
 display: flex;
 flex-wrap: wrap;
 width: 90%;
 justify-content: center;
 align-items: center;
 /* border: 5px solid black; */
 margin: 2vw auto;
`;

const FoodCard = styled.div`
width: 380px;
background-color: rgb(67, 66, 62);
/* border: 1px solid red; */
font-size: 1vw;
padding: 1.1vw;
margin: 1vw;
border-radius: 5px;
font-size: 1vw;
border-radius: 5px;

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
}

.text{
    margin-top:1vw ;
}

.btn{
    text-align: end;
    button{
        margin-top: 1vw;
        padding: .5vw;
        text-align: end;
        border: none;
        border-radius: 5px;
        background-color: rgb(255, 67, 67);
    }
}
`;