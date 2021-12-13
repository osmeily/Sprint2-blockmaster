import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import Puntaje from "./Puntaje"
import poster from "../resources/Poster.jpg"
import Slider from "./Slider"


const StyledMenosv = styled.div` 
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


const MenosValoradas = () => {
    const url = "http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.asc&api_key=325b96410b79d7f125650415ad9ff55c"
    
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
    
    const imgNull = (imgUrl) => {
        if(imgUrl === "https://image.tmdb.org/t/p/w300null"){
            return poster
        }else{
            return imgUrl
        }
    }

    return (
        <StyledMenosv>
            <Slider/>
            <Styledh1>Películas más valoradas</Styledh1>
            <Styledpeli>
            {
                movies.map(movie => {
                    let imgPoster = imgNull(`https://image.tmdb.org/t/p/w300${movie.poster_path}`)
                    console.log(imgPoster)
                    return ( 
                    <Card style={{ width: '12rem', border: 'none' }}>
                        <Puntaje vote_average={movie.vote_average}/>
                        <Card.Img style={{ height: '100%' }} variant="top" src={imgPoster} />
                        </Card>
                        )
                })
            }
            </Styledpeli>
        </StyledMenosv>

            

    )
}
export default MenosValoradas
