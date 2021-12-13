import React, { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
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
`


const Todas = () => {
    const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=325b96410b79d7f125650415ad9ff55c&"
    
    const [movies, setMovies] = useState([])

    const fetchApi = async() => {
        const response = await fetch(url)
        console.log(response.status);
        const data = await response.json()
        setMovies(data.results);
        console.log(movies);
    }

    useEffect(() => {
        fetchApi()
    }, [])
    
    return (
        <StyledTodas>
            <Slider/>
            <Styledh1>Todas las películas</Styledh1>
            <Styledpeli>
            {
                movies.map(movie => {
                    return ( 
                    <Card style={{ width: '12rem', border: 'none' }}>
                        <Puntaje vote_average={movie.vote_average}/>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/"+"w300"+movie.poster_path} />
                        </Card>
                        )
                })
            }
            </Styledpeli>
        </StyledTodas>

            

    )
}

export default Todas
