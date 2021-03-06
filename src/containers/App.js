import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Todas from '../components/Todas'
import MasValoradas from '../components/MasValoradas'
import MenosValoradas from '../components/MenosValoradas'
import Registro from '../components/Registro'
import Login from '../components/Login'
import Detalle from '../components/Detalle'
import Busqueda from '../components/Busqueda'


const StyledPrincipal = styled.div`
font-family: 'Montserrat', sans-serif;
background-color: #0F0E17;
height: max-content;
color: white;
min-height: 100vh;
overflow: hidden;


`


const App = () =>{
        return (
            <StyledPrincipal>
                <Router>
                    <NavBar/>
                    <Routes>
                    <Route path='/' exact element={<Todas/>}/>
                    <Route path='/detalle/:movieId' element={<Detalle/>}/>
                    <Route path='/busqueda' element={<Busqueda/>}/>
                    <Route path='/masvaloradas' element={<MasValoradas/>}/>
                    <Route path='/menosvaloradas' element={<MenosValoradas/>}/>
                    <Route path='/registro'  element={<Registro/>}/>
                    <Route path='/login'  element={<Login/>}/>
                    
                    </Routes>
                </Router>
            </StyledPrincipal>
        )
    }

export default App
