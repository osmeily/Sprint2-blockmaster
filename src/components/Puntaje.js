import React from 'react'
import styled from 'styled-components'
import star from '../resources/Vector.png'

const StyledVote = styled.div`
display: flex;
gap: 5px;
width: 50%;
height: 15%;
padding: 10px;
position: absolute;
margin-top: 10px;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.5);
border: 1px solid #FED941;
border-radius: 0px 20px 20px 0px;
margin-left: -1px;
`

const Puntaje = (props) => {
    return (
        <StyledVote>
            <img src={star} alt=""/>
            <span>{props.vote_average}</span>
        </StyledVote>
    )
}

export default Puntaje
