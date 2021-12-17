import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import Puntaje from "./Puntaje"
import Slider from "./Slider"
import InfiniteScroll from "react-infinite-scroll-component"
import { Link } from "react-router-dom"
import "../styles/card.css"

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


const Todas = () => {


    
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    
    const url = "https://api.themoviedb.org/3/discover/movie?pagesort_by=popularity.desc&api_key=325b96410b79d7f125650415ad9ff55c&page="+page

    const fetchApi = async() => {
        const response = await fetch(url)
        console.log(response.status);
        const data = await response.json()
        setMovies(prevMovies => prevMovies.concat(data.results))
        console.log(movies);
    }


    useEffect(() => {
        fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    
    return (
        <InfiniteScroll dataLength={movies.length} hasMore={true} next={()=> setPage((prevPage)=> prevPage+1)}>
        <StyledTodas>
            <Slider/>
            <Styledh1>Todas las películas</Styledh1>
            <Styledpeli>
            {
                movies.map(movie => {
                    return ( 
                    <Link to={"/detalle/"+ movie.id} style={{textDecoration: "none", color: "white"}}>
                    <Card key={movie.id} onClick={() => JSON.stringify(localStorage.setItem("id", movie.id))} ClassName="card" style={{ width: '12rem', border: 'none' }}>
                        <Puntaje vote_average={movie.vote_average}/>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w780"+movie.poster_path} />
                        </Card>
                        </Link>
                        )
                })
            }
            </Styledpeli>
        </StyledTodas>
        </InfiniteScroll>

            

    )
}

export default Todas
