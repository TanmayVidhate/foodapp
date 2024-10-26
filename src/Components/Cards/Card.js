
import styled from 'styled-components'
import { BASE_URL } from '../../Views/Home/Home';
import { Button } from '../Navbar/Navbar';
import { type } from '@testing-library/user-event/dist/type';

function Card({ data, dataFromNavbar, filterNavData }) {

    // console.log("cards page==",data)
    // console.log("navbar data cardspage==",dataFromNavbar);
    console.log("filterdate==", filterNavData);
    let arr = [];
    arr = [...filterNavData];
    // console.log( typeof(arr))

    if (dataFromNavbar === "") {
        return (
            <>
                <Cards>
                    {
                        data?.map(({ image, name, price, text, type }) => (
                            <FoodCard key={name}>
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
                                            <Button>
                                                ${price.toFixed(2)}
                                            </Button>
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
    else {
        return (
            <>
                <Cards>
                    {
                        arr?.map(({ image, name, price, text, type }) => (
                            <FoodCard key={name}>
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
                                            <Button>
                                                ${price.toFixed(2)}
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </FoodCard>
                        ))

                    }
                </Cards>
            </>
        );
    }

}

export default Card;

const Cards = styled.div`
 display: flex;
 flex-wrap: wrap;
 width: 100%;
 justify-content: center;
 align-items: center;
 /* flex-direction: column; */
 flex-wrap: wrap;
 margin: 2vw auto;
`;

const FoodCard = styled.div`
width: 370px;
/* height:190px; */
background-color: transparent;
backdrop-filter: blur(10px);
border: 1px solid red;
font-size: 1vw;
padding: 1.1vw;
margin: 1vw;
border-radius: 5px;
font-size: 1vw;
border-radius: 20px;

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
}
`;