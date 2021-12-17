import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import play from "../resources/Vector (1).png"
import mas from "../resources/mas.png"

const StyledDetalles = styled.div `
display: flex;
justify-content: center;
gap:10px;
`

const StyledColumna1 = styled.img`
max-width: 600px;
margin: 20px;
border-radius: 10px;
`

const StyledColumna2 = styled.div`
max-width: 600px;
margin: 20px;
`
const StyledTitulo = styled.p`
font-size: 48px;
font-weight: 700;
`

const StyledDesc = styled.p`
font-size: 18px;
`

const StyledYear = styled.p`
color: #A7A9BE;
`

const Detalle = () => {

    const [movie, setMovie] = useState({})
    
    const fetchApi = async(id) => {

        const response = await fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=325b96410b79d7f125650415ad9ff55c")
        const data = await response.json()
        setMovie(data);
        console.log(data)
    }

    const getLocalStorage = () => {
        return localStorage.getItem("id")
    }
    
    useEffect(() => {
        fetchApi(getLocalStorage())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const id = getLocalStorage()

    const url = `"https://api.themoviedb.org/3/movie/${id}?api_key=325b96410b79d7f125650415ad9ff55c"`
    console.log(url)

    return (
        
        <StyledDetalles>
            <StyledColumna1 src={"http://image.tmdb.org/t/p/w780"+movie.poster_path} alt=""/>
            <StyledColumna2>
            <StyledTitulo>
                {movie.title}
            </StyledTitulo>
            <StyledDesc>
                {movie.overview}
            </StyledDesc>
            <StyledYear>
                {movie.release_date}
            </StyledYear>
           {/*  <p>
                {movie.genres.map(genre=>genre.name).join(", ")}
            </p> */}
            <Button className='btn' style={{margin: "auto", width: "200px", height: "48px", bottom: "10%", backgroundColor: "#FED941", color: "black", fontWeight: "700", textAlign: "center", marginRight: "20px" }}><img style={{padding: "0px 20px"}} src={play} alt=""/>VER AHORA</Button>

            <Button className='btn' style={{margin: "auto", width: "200px", height: "48px", bottom: "10%", backgroundColor: "#0F0E17", color: "#FED941", border: "1px solid #FED941", fontWeight: "700", textAlign: "center"}}><img style={{}} src={mas} alt=""/>VER DESPUÉS</Button>
            </StyledColumna2>
            
        </StyledDetalles>
    )
}

export default Detalle
