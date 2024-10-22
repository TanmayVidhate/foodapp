import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import styled from 'styled-components';
import { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Card.js';

export const BASE_URL = "http://localhost:9000";

function Home() {

    const [error, setErorr] = useState();

    const [data, setdata] = useState();

    const [loading, setloading] = useState();

    useEffect(() => {
        const Fetchdata = async () => {
            setloading(true);

            try {
                const response = await fetch(BASE_URL);

                const json = await response.json();

                setdata(json);

                setloading(false);
            }
            catch (Error) {
                console.log("Unable to fetch data");
            }

        }
        Fetchdata();
    }, [])

    console.log(data)
    if (error) return <div>{error}</div>


    return (
        <>
            <Navbar />
            <Container>
                <Card data={data} />
            </Container>
        </>
    )
}

export default Home;

const Container = styled.div`
height: calc(100vh - 170px);
background-image: url("banner.png");
background-size: cover;

`;