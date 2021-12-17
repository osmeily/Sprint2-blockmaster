import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Puntaje from "./Puntaje"
import Slider from "./Slider"


const StyledMasv = styled.div` 
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


const MasValoradas = () => {
    const url = "http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=325b96410b79d7f125650415ad9ff55c"
    
    const [movies, setMovies] = useState([])

    const fetchApi = async() => {
        const response = await fetch(url)
        console.log(response.status);
        const data = await response.json()
        setMovies(data.results);
    }
    

    useEffect(() => {
        fetchApi()
    }, [])
    
    return (
        <StyledMasv>
            <Slider/>
            <Styledh1>Películas más valoradas</Styledh1>
            <Styledpeli>
            {
                movies.map(movie => {
                    return ( 
                        <Link to={"/detalle/"+ movie.id} style={{textDecoration: "none", color: "white"}}>
                    <Card style={{ width: '12rem', border: 'none' }} onClick={() => JSON.stringify(localStorage.setItem("id", movie.id))}>
                        <Puntaje vote_average={movie.vote_average}/>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w300"+movie.poster_path} />
                        </Card>
                        </Link>
                        )
                })
            }
            </Styledpeli>
        </StyledMasv>

            

    )
}


export default MasValoradas
