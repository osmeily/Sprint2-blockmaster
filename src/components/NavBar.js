import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../resources/blockmaster.png"
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
text-align: center;

`

const StyledBar = styled.form` 

`

const StyledInput = styled.input` 
width: 500px;
height: 44px;
border: 0.5px solid #FED941;
border-radius: 8px 0px 0px 8px;

`

const StyledButton = styled.button`
margin: 0;
padding: 0;
border: none;

`



const NavBar = () => {

const [searchText, setSearchText] = useState("")

    const navigate = useNavigate()

    const handleSubmit = ({target}) => {
        setSearchText(target.value)
        navigate("/?search=" + searchText)
    }

    const handleSubmitText= (e) => {
        e.preventDefault()
        console.log(searchText)
        localStorage.setItem("keyword", searchText)
    }

    const redireccion = () => {
        navigate("/busqueda")
    }
    
    
        return (
            <StyledNav>
                <Nav>
                    <Link to="/"> <img src={logo} alt=""/> </Link>
                    <Link to="/" style={{color:"white"}} className="nav-link">Todas</Link>
                    <Link to="/masvaloradas" style={{color:"white"}} className="nav-link">Más valoradas</Link>
                    <Link to="/menosvaloradas" style={{color:"white"}} className="nav-link">Menos valoradas</Link>
                    <Link to="/registro" style={{color:"white"}} className="nav-link">Registrarse</Link>
                    <Link to="/login" style={{color:"white"}} className="nav-link">Login</Link>
                    <StyledBar onSubmit={handleSubmitText}>
                        <StyledInput type="text" placeholder="Busca tu película favorita" value={searchText} onChange={handleSubmit}/>  
                        <StyledButton  type='submit' onClick={redireccion}>
                        <img src={primary} alt=""/>
                        </StyledButton>
                    </StyledBar>
                </Nav>
            </StyledNav>
            
        )
    }

export default NavBar

