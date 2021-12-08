import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../resources/logo-blockBuster.png"
import primary from "../resources/primary.png"

const StyledNav = styled.div`
font-weight: bold;
background-color: #0F0E17;
text-align: center;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 1366px;
height: 112px;
position: relative;

`

const StyledBar = styled.div` 

`

const StyledInput = styled.input` 
width: 500px;
height: 44px;
border: 0.5px solid #FED941;
border-radius: 8px 0px 0px 8px;

`

export default class NavBar extends Component {
    render() {
        return (
            <StyledNav>
                <Nav>
                    <Link to="/"> <img src={logo} alt=""/> </Link>
                    <Link to="/" style={{color:"white"}} className="nav-link">Todas</Link>
                    <Link to="/masvaloradas" style={{color:"white"}} className="nav-link">Más valoradas</Link>
                    <Link to="/menosvaloradas" style={{color:"white"}} className="nav-link">Menos valoradas</Link>
                    <Link to="/registro" style={{color:"white"}} className="nav-link">Registrarse</Link>
                    <StyledBar>
                        <StyledInput type="text" placeholder="Busca tu película favorita" />  
                        <img src={primary} alt=""/>
                    </StyledBar>
                </Nav>
            </StyledNav>
            
        )
    }
}

