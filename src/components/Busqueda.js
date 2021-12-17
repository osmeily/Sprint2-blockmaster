import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Puntaje from "./Puntaje"
import Slider from "./Slider"

const StyledTodas = styled.div` 
width: 80%;
margin: auto;

`

const Styledh1 = styled.h1`
margin: 20px 0px;
font-weight: 600;
`

const Styledpeli = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
gap:20px;
margin: auto;
overflow: hidden;
text-decoration: none;
`

const Busqueda = () => {

    const [busqueda, setBusqueda] = useState([])

    const fetchApi = async(keyword) => {
        const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=325b96410b79d7f125650415ad9ff55c&language=en-US&query="+keyword+"&page=1&include_adult=false")
        console.log(response.status);
        const data = await response.json()
        setBusqueda(data.results);
        console.log(busqueda);
    }

    const getLocal = () => {
        return localStorage.getItem("keyword")
    }

    useEffect(() => {
        fetchApi(getLocal())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [busqueda])

    

    return (
        <StyledTodas>
            <Slider/>
            <Styledh1>{getLocal()}</Styledh1>
            <Styledpeli>
            {
                busqueda.map(busca => {
                    return ( 
                    <Link to={"/detalle/"+ busca.id} style={{textDecoration: "none", color: "white"}}>
                    <Card key={busca.id} onClick={() => JSON.stringify(localStorage.setItem("id", busca.id))}ClassName="card" style={{ width: '12rem', border: 'none' }}>
                        <Puntaje vote_average={busca.vote_average}/>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w780"+busca.poster_path} />
                        </Card>
                        </Link>
                        )
                })
            }
            </Styledpeli>
        </StyledTodas>
    )
}

export default Busqueda
