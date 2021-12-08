import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Todas from '../components/Todas'
import MasValoradas from '../components/MasValoradas'
import MenosValoradas from '../components/MenosValoradas'
import Registro from '../components/Registro'

const StyledPrincipal = styled.div`
font-family: 'Montserrat', sans-serif;
background-color: #0F0E17;
width: 100vw;
height: 100vh;
color: white;

`

export default class App extends Component {
    render() {
        return (
            <StyledPrincipal>
                <Router>
                    <NavBar/>
                    <Routes>
                    <Route path='/' exact element={<Todas/>}/>
                    <Route path='/masvaloradas' element={<MasValoradas/>}/>
                    <Route path='/menosvaloradas' element={<MenosValoradas/>}/>
                    <Route path='/registro'  element={<Registro/>}/>
                    </Routes>
                </Router>
            </StyledPrincipal>
        )
    }
}
